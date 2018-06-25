import React from "react";
import { Step } from "react-presents";
import { Route, Switch } from "react-router-dom";
import classNames from "classnames";
import { animateSwitch } from "../misc/routerComponents";
import CustomSlide from "../misc/CustomSlide";
import SlideOut from "../misc/SlideOut";
import FadeOut from "../misc/FadeOut";
import distracted from "../images/distracted.gif";
import fancy from "../images/fancy.gif";
import calm from "../images/calm.mp4";
import styles from "./common.scss";

const FaderSwitch = animateSwitch(Switch, FadeOut);

export default () => (
  <CustomSlide>
    <h1>Why?</h1>

    <Step index={0} maxIndex={3}>
      {""}
    </Step>
    <div className={styles.centerWithHeader}>
      <FaderSwitch>
        <Route
          path="/(.*)/0"
          render={() => (
            <div
              className={classNames(styles.hugeText, styles.centerWithHeader)}
            >
              <span className={styles.main}>Cognitive load</span>
              &
              <span className={styles.main}>Swish</span>
            </div>
          )}
        />

        <Route path="/(.*)/1" render={() => <img src={distracted} />} />

        <Route path="/(.*)/2" render={() => <img src={fancy} />} />

        <Route
          path="/(.*)/3"
          render={() => (
            <video loop={true} autoPlay={true} style={{ maxWidth: "546px" }}>
              <source src={calm} type="video/mp4" />
            </video>
          )}
        />
      </FaderSwitch>
    </div>
  </CustomSlide>
);
