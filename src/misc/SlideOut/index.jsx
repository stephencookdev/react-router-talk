import React from "react";
import Slider from "./Slider";

export default class SlideOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childPosition: Slider.CENTER,
      curChild: props.children,
      curUniqId: props.uniqId,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    };

    this.direction = 1;

    this.swapChildren = this.swapChildren.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevUniqId = prevProps.uniqKey || prevProps.children.type;
    const uniqId = this.props.uniqKey || this.props.children.type;

    if (prevUniqId !== uniqId) {
      if (uniqId === this.state.prevUniqId) {
        // This means that we're going back to the route we're trying to animate
        // away from. This probably means that the navigation got cancelled
        // before really starting (e.g. we redirected) - so just pretend nothing
        // ever happened...!
        return this.setState({
          childPosition: Slider.CENTER,
          curChild: this.props.children,
          curUniqId: uniqId,
          prevChild: null,
          prevUniqId: null,
          animationCallback: null
        });
      }

      if (typeof this.props.order === "function") {
        this.direction = this.props.order(
          this.props.uniqKey,
          prevProps.uniqKey
        );
      } else if (Array.isArray(this.props.order)) {
        const prevI = this.props.order.indexOf(prevProps.uniqKey);
        const newI = this.props.order.indexOf(this.props.uniqKey);
        this.direction = prevI >= 0 && newI >= 0 && prevI > newI ? -1 : 1;
      }

      this.setState({
        childPosition: this.direction === 1 ? Slider.TO_LEFT : Slider.TO_RIGHT,
        curChild: this.props.children,
        curUniqId: uniqId,
        prevChild: prevProps.children,
        prevUniqId,
        animationCallback: this.swapChildren
      });
    }
  }

  swapChildren() {
    this.setState({
      childPosition:
        this.direction === 1 ? Slider.FROM_RIGHT : Slider.FROM_LEFT,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    });
  }

  render() {
    return (
      <Slider
        position={this.state.childPosition}
        animationCallback={this.state.animationCallback}
      >
        {this.state.prevChild || this.state.curChild}
      </Slider>
    );
  }
}
