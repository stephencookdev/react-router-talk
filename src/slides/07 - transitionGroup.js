import React from "react";
import { Step } from "react-presents";
import { Route, Switch } from "react-router-dom";
import CustomSlide from "../misc/CustomSlide";
import FadeOut from "../misc/FadeOut";
import { animateSwitch } from "../misc/routerComponents";
import styles from "./common.scss";

const FaderSwitch = animateSwitch(Switch, FadeOut);

export default () => (
  <CustomSlide>
    <h1>
      <code>TransitionGroup</code>
    </h1>
    <Step index={0} maxIndex={1}>{""}</Step>
    <FaderSwitch>
      <Route path="/(.*)/0" render={() => (
        <div className={styles.hugetext}>
          <span className={styles.main}>Renders old children</span>
          &
          <span className={styles.main}>Animates in new children</span>
          &
          <span className={styles.main}>Animates out old children</span>
        </div>
      )} />

      <Route path="/(.*)/1" render={() => (
        <div className={styles.hugetext}>
          <span className={styles.main}>The problem...?</span>
        </div>
      )} />
    </FaderSwitch>
  </CustomSlide>
);
