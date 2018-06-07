import React from "react";
import { Step } from "react-presents";
import CustomSlide from "../misc/CustomSlide";
import Fader from "../misc/FadeOut/Fader";

export default () => (
  <CustomSlide>
    <h1>
      <code>TransitionGroup</code>
    </h1>
    <ul>
      <li>Keeps rendering "removed" elements</li>
      <li>Animates in elements upon entry</li>
      <li>Animates out elements upon exit attempt</li>
      <Step index={1}>
        <Fader fade={Fader.IN}>
          <li>The problem...?</li>
        </Fader>
      </Step>
    </ul>
  </CustomSlide>
);
