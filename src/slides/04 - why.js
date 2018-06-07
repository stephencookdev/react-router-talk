import React from "react";
import { Step } from "react-presents";
import { Route, Switch } from "react-router-dom";
import { animateSwitch } from "../misc/routerComponents";
import CustomSlide from "../misc/CustomSlide";
import SlideOut from "../misc/SlideOut";
import FadeOut from "../misc/FadeOut";
import HighlightList from "../misc/HighlightList";
import styles from "./common.scss";

const FaderSwitch = animateSwitch(Switch, FadeOut);

export default () => (
  <CustomSlide>
    <h1>Why?</h1>
    <HighlightList items={["Cognitive load", "Swish", "But moderation!"]} />

    <div className={styles.center}>
      <FaderSwitch uniqKey={location} order={(a, b) => a.localeCompare(b)}>
        <Route
          path="/(.*)/1"
          render={() => (
            <video
              autoPlay={true}
              loop={true}
              style={{ maxWidth: "100%", minHeight: "225px" }}
            >
              <source type="video/mp4" src="https://i.imgur.com/C4ZYGsz.mp4" />
            </video>
          )}
        />

        <Route
          path="/(.*)/2"
          render={() => (
            <img src="https://media.giphy.com/media/mpkW4YrPlPCq4/giphy.gif" />
          )}
        />

        <Route
          path="/(.*)/3"
          render={() => (
            <video loop={true} autoPlay={true} style={{ maxWidth: "546px" }}>
              <source
                src="https://media.tenor.com/videos/1b641acec7081c0f595e94798baaaea4/mp4"
                type="video/mp4"
              />
              <source
                src="https://media.tenor.com/videos/f255855195c8f0662aad0c74ac9c29bd/webm"
                type="video/webm"
              />
            </video>
          )}
        />
      </FaderSwitch>
    </div>
  </CustomSlide>
);
