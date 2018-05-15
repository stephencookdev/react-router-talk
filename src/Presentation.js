import React from "react";
import { Presentation, Slide, DropDownNav } from "react-presents";

const slides = require("./slides/*.js");

export default () => (
  <Presentation>
    {Object.keys(slides).map(name => (
      <Slide component={slides[name].default} key={name} />
    ))}
  </Presentation>
);
