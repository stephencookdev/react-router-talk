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
import FakeBrowser from "../misc/FakeBrowser";
import styles from "./common.scss";

export default () => (
  <CustomSlide>
    <h1>
      <code>TransitionGroup</code> problem
    </h1>

    <HighlightList
      items={[
        "Animates all exiting nodes, dumbly",
        "No link between exit & start",
        "Customisation hard"
      ]}
    />

    <Step index={1} maxIndex={3}>
      <FakeBrowser
        urlMap={{
          "#/7/1": "https://mysite.com/box/a",
          "#/7/2": "https://mysite.com/box/b",
          "#/7/3": "https://mysite.com/box/c"
        }}
      >
        <Route
          render={({ location }) => (
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
          )}
        />
      </FakeBrowser>
    </Step>
  </CustomSlide>
);
