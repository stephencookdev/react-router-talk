import React from "react";
import { Code, Step } from "react-presents";
import classNames from "classnames";
import { Switch, Route } from "react-router-dom";
import CustomSlide from "../misc/CustomSlide";
import SlideOut from "../misc/SlideOut";
import { animateSwitch } from "../misc/routerComponents";
import styles from "./common.scss";

const SliderSwitch = animateSwitch(Switch, SlideOut);

const slideOutCode = `class SlideOut extends React.Component {
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
  }

  componentDidUpdate(prevProps, prevState) {
    const prevUniqId = prevProps.uniqKey || prevProps.children.type;
    const uniqId = this.props.uniqKey || this.props.children.type;

    if (prevUniqId !== uniqId) {
      this.setState({
        childPosition: Slider.TO_LEFT,
        curChild: this.props.children,
        curUniqId: uniqId,
        prevChild: prevProps.children,
        prevUniqId,
        animationCallback: this.swapChildren
      });
    }
  }

  swapChildren = () => {
    this.setState({
      childPosition: Slider.FROM_RIGHT,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    });
  };

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
}`;

const slideOutCodeRender = `render() {
  return (
    <Slider
      position={this.state.childPosition}
      animationCallback={this.state.animationCallback}
    >
      {this.state.prevChild || this.state.curChild}
    </Slider>
  );
}`;

const slideOutCodeUpdate = `componentDidUpdate(prevProps, prevState) {
  const prevUniqId = prevProps.uniqKey || prevProps.children.type;
  const uniqId = this.props.uniqKey || this.props.children.type;

  if (prevUniqId !== uniqId) {
    this.setState({
      childPosition: Slider.TO_LEFT,
      curChild: this.props.children,
      curUniqId: uniqId,
      prevChild: prevProps.children,
      prevUniqId,
      animationCallback: this.swapChildren
    });
  }
}`;

const slideOutCodeSwap = `swapChildren = () => {
  this.setState({
    childPosition: Slider.FROM_RIGHT,
    prevChild: null,
    prevUniqId: null,
    animationCallback: null
  });
}`;

const animateSwitchCode = `const animateSwitch = (CustomSwitch, AnimatorComponent) => ({
  children,
}) => (
  <Route
    render={({ location }) => (
      <AnimatorComponent uniqKey={location.pathname}>
        <CustomSwitch location={location}>{children}</CustomSwitch>
      </AnimatorComponent>
    )}
  />
);

const SwitchWithSlide = animateSwitch(Switch, SlideOut);`;

const codeList = [
  { value: slideOutCode, small: true },
  { value: slideOutCodeRender },
  { value: slideOutCodeUpdate },
  { value: slideOutCodeSwap },
  { value: slideOutCode, small: true },
  { value: animateSwitchCode }
];

export default () => (
  <CustomSlide>
    <Step index={0} maxIndex={codeList.length}>
      {""}
    </Step>

    <SliderSwitch order={(a, b) => a.localeCompare(b)}>
      {codeList.map((code, i) => (
        <Route
          path={`/(.*)/${i}`}
          render={() => (
            <div
              className={classNames(styles.centerCode, {
                [styles.smallCode]: code.small
              })}
            >
              <Code key={i} value={code.value} />
            </div>
          )}
        />
      ))}

      <Route
        path={`/(.*)/${codeList.length}`}
        render={() => (
          <div className={classNames(styles.hugeText, styles.centerCode)}>
            <a href="https://codesandbox.io/s/1v50l21rv7" target="_blank">
              https://codesandbox.io/s/1v50l21rv7
            </a>
          </div>
        )}
      />
    </SliderSwitch>
  </CustomSlide>
);
