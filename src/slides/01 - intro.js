import React from "react";
import { Step } from "react-presents";
import { Route, Switch } from "react-router-dom";
import CustomSlide from "../misc/CustomSlide";
import { animateSwitch } from "../misc/routerComponents";
import FadeOut from "../misc/FadeOut";
import boring from "../images/boring.gif";
import styles from "./common.scss";

const FaderSwitch = animateSwitch(Switch, FadeOut);

export default () => (
  <CustomSlide title={true}>
    <Step index={0} maxIndex={1}>
      {""}
    </Step>
    <FaderSwitch>
      <Route
        path="/(.*)/0"
        render={() => (
          <React.Fragment>
            <h1>Native-Like Transitions with React Router</h1>
            <span className={styles.subtitle}>(without losing your mind)</span>
          </React.Fragment>
        )}
      />
      <Route path="/(.*)/1" render={() => <img src={boring} width="500px" />} />
    </FaderSwitch>
  </CustomSlide>
);
