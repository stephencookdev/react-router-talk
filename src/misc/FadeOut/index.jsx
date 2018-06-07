import React from "react";
import Fader from "./Fader";

const getUniqId = props => props.uniqKey || props.children.type;

export default class FadeOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curChild: props.children,
      curUniqId: getUniqId(props),
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    };

    this.swapChildren = this.swapChildren.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevUniqId = getUniqId(prevProps);
    const uniqId = getUniqId(this.props);

    if (prevUniqId !== uniqId) {
      if (uniqId === this.state.prevUniqId) {
        // This means that we're going back to the route we're trying to animate
        // away from. This probably means that the navigation got cancelled
        // before really starting (e.g. we redirected) - so just pretend nothing
        // ever happened...!
        return this.setState({
          curChild: this.props.children,
          curUniqId: uniqId,
          prevChild: null,
          prevUniqId: null,
          animationCallback: null
        });
      }

      this.setState({
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
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    });
  }

  render() {
    const elems = [];

    if (this.state.prevChild)
      elems.push(
        <Fader fade={Fader.OUT} key={this.state.prevUniqId} absolute={true}>
          {this.state.prevChild}
        </Fader>
      );

    if (this.state.curChild)
      elems.push(
        <Fader
          fade={Fader.IN}
          animationCallback={this.state.animationCallback}
          key={this.state.curUniqId}
        >
          {this.state.curChild}
        </Fader>
      );

    return elems;
  }
}
