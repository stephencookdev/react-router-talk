import React from "react";
import { Step } from "react-presents";
import { Route, Switch } from "react-router-dom";
import classNames from "classnames";
import { animateSwitch } from "../misc/routerComponents";
import CustomSlide from "../misc/CustomSlide";
import SlideOut from "../misc/SlideOut";
import FadeOut from "../misc/FadeOut";
import FakeBrowser from "../misc/FakeBrowser";
import { XBox } from "../misc/Boxes";
import distracted from "../images/distracted.gif";
import fancy from "../images/fancy.gif";
import calm from "../images/calm.mp4";
import styles from "./common.scss";

const FaderSwitch = animateSwitch(Switch, FadeOut);
const SliderSwitch = animateSwitch(Switch, SlideOut);

export default () => (
  <CustomSlide>
    <h1>Why?</h1>

    <Step index={0} maxIndex={10}>
      {""}
    </Step>
    <div className={styles.centerWithHeader}>
      <FaderSwitch pathKeyGenerator={[{ test: /\/[2-8]$/, pathKey: "#/3/2" }]}>
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

        <Route
          path="/(.*)/([2-5])"
          render={() => (
            <FakeBrowser
              urlMap={{
                "#/3/2": "https://mysite.com/19582",
                "#/3/3": "https://mysite.com/65402",
                "#/3/4": "https://mysite.com/33093",
                "#/3/5": "https://mysite.com/65204"
              }}
            >
              <Switch>
                <Route path="/(.*)/2" render={() => <XBox x="19582" />} />
                <Route path="/(.*)/3" render={() => <XBox x="65402" />} />
                <Route path="/(.*)/4" render={() => <XBox x="33093" />} />
                <Route path="/(.*)/5" render={() => <XBox x="65204" />} />
              </Switch>
            </FakeBrowser>
          )}
        />

        <Route
          path="/(.*)/([6-8])"
          render={() => (
            <FakeBrowser
              urlMap={{
                "#/3/6": "https://mysite.com/65402",
                "#/3/7": "https://mysite.com/65204",
                "#/3/8": "https://mysite.com/64502"
              }}
            >
              <SliderSwitch order={(a, b) => a.localeCompare(b)}>
                <Route path="/(.*)/6" render={() => <XBox x="65402" />} />
                <Route path="/(.*)/7" render={() => <XBox x="65204" />} />
                <Route path="/(.*)/8" render={() => <XBox x="64502" />} />
              </SliderSwitch>
            </FakeBrowser>
          )}
        />

        <Route path="/(.*)/9" render={() => <img src={fancy} />} />

        <Route
          path="/(.*)/10"
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
