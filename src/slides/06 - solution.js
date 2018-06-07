import React from "react";
import { Code, Step } from "react-presents";
import { Route, Switch } from "react-router-dom";
import classNames from "classnames";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { animateSwitch } from "../misc/routerComponents";
import FadeOut from "../misc/FadeOut";
import CustomSlide from "../misc/CustomSlide";
import FakeBrowser from "../misc/FakeBrowser";
import { ABox, BBox, CBox } from "../misc/Boxes";
import styles from "./common.scss";

const FaderSwitch = animateSwitch(Switch, FadeOut);

const recommendedCode = `<Route render={({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={300}>
      <Switch location={location}>
        <Route exact path="/box/a" component={ABox} />
        <Route exact path="/box/b" component={BBox} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
)} />`;

export default () => (
  <CustomSlide>
    <h1>The Solution</h1>
    <ul>
      <li>react-transition-group</li>
      <li>
        <code>Transition</code> for animating elements
      </li>
      <li>
        <code>TransitionGroup</code> for holding onto elements
      </li>
    </ul>

    <div className={styles.sidebyside}>
      <Code value={recommendedCode} options={{ mode: "javascript" }} />

      <FakeBrowser
        urlMap={{
          "#/5/0": "https://mysite.com/box/a",
          "#/5/1": "https://mysite.com/box/b"
        }}
      >
        <Step index={0} maxIndex={1}>
          {""}
        </Step>
        <div className={classNames(styles.middle, styles.center)}>
          <Route
            render={({ location }) => (
              <TransitionGroup className={styles.fadeGroup}>
                <CSSTransition
                  key={location.pathname}
                  classNames={{
                    enter: styles.fadeEnter,
                    enterActive: styles.fadeEnterActive,
                    exit: styles.fadeExit,
                    exitActive: styles.fadeExitActive
                  }}
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route path="/(.*)/0" component={ABox} />
                    <Route path="/(.*)/1" component={BBox} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </FakeBrowser>
    </div>
  </CustomSlide>
);
