import React from "react";
import { Step } from "react-presents";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CustomSlide from "../misc/CustomSlide";
import HighlightList from "../misc/HighlightList";
import {
  BoxContainer,
  ABoxCompact,
  BBoxCompact,
  CBoxCompact
} from "../misc/Boxes";
import { AToBTransition, AToBFakeTransition } from "../misc/transitionDiagrams";
import FakeBrowser from "../misc/FakeBrowser";
import { animateSwitch } from "../misc/routerComponents";
import FadeOut from "../misc/FadeOut";
import styles from "./common.scss";

const FaderSwitch = animateSwitch(Switch, FadeOut);

export default () => (
  <CustomSlide>
    <h1>
      <code>TransitionGroup</code> problem
    </h1>

    <HighlightList
      items={[
        { text: "Animates all exiting nodes, dumbly", count: 3 },
        { text: "No link between exit & start", count: 2 },
        "Customisation hard"
      ]}
    />

    <div className={styles.center}>
      <FaderSwitch pathKeyGenerator={[{ test: /\/[1-3]$/, pathKey: "#/7/1" }]}>
        <Route
          path="/(.*)/([1-3])"
          render={({ location }) => (
            <FakeBrowser
              urlMap={{
                "#/7/1": "https://mysite.com/box/a",
                "#/7/2": "https://mysite.com/box/b",
                "#/7/3": "https://mysite.com/box/c"
              }}
              location={location}
            >
              <BoxContainer>
                <TransitionGroup className={styles.fadeGroup}>
                  <CSSTransition
                    key={location.pathname}
                    classNames={{
                      enter: styles.fadeFixEnter,
                      enterActive: styles.fadeFixEnterActive,
                      exit: styles.fadeFixExit,
                      exitActive: styles.fadeFixExitActive
                    }}
                    timeout={3000}
                  >
                    <Switch location={location}>
                      <Route path="/(.*)/1" component={ABoxCompact} />
                      <Route path="/(.*)/2" component={BBoxCompact} />
                      <Route path="/(.*)/3" component={CBoxCompact} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </BoxContainer>
            </FakeBrowser>
          )}
        />

        <Route path="/(.*)/4" component={AToBTransition} />
        <Route path="/(.*)/5" component={AToBFakeTransition} />

        <Route
          path="/(.*)/6"
          render={() => (
            <video loop={true} autoPlay={true} style={{ maxWidth: "546px" }}>
              <source
                src="https://media.giphy.com/media/xTiTntReleqBnhBNwQ/giphy.mp4"
                type="video/mp4"
              />
            </video>
          )}
        />
      </FaderSwitch>
    </div>
  </CustomSlide>
);
