import React from "react";
import classNames from "classnames";
import styles from "./styles.scss";

export default class Fader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fade: this.props.fade === Fader.IN ? Fader.OUT : Fader.IN
    };

    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          fade: this.props.fade
        }),
      100
    );

    if (this.node) {
      this.node.addEventListener("transitionend", this.onTransitionEnd);
    }
  }

  componentWillUnmount() {
    if (this.node) {
      this.node.removeEventListener("transitionend", this.onTransitionEnd);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.fade !== this.props.fade) {
      this.setState({ fade: newProps.fade });
    }
  }

  onTransitionEnd(e) {
    // the Slider transitions the `transform` property. Any other transitions
    // that occur on the element we can just ignore.
    if (e.propertyName !== "opacity") return;

    if (this.props.animationCallback) this.props.animationCallback();
  }

  render() {
    return (
      <div
        ref={node => (this.node = node)}
        className={classNames(styles["animatable-fade"], {
          [styles.in]: this.state.fade === Fader.IN,
          [styles.out]: this.state.fade === Fader.OUT,
          [styles.absolute]: this.props.absolute
        })}
      >
        <div className={this.props.className}>{this.props.children}</div>
      </div>
    );
  }
}

Fader.IN = "IN";
Fader.OUT = "OUT";
