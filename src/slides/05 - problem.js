import React from "react";
import CustomSlide from "../misc/CustomSlide";
import ObnoxiousZoomIn from "../misc/ObnoxiousZoomIn";

export default () => (
  <CustomSlide>
    <ObnoxiousZoomIn>
      <h1>The Problem</h1>
      <ul>
        <li>
          Animations have no history
          <ul>
            <li>You can hack</li>
          </ul>
        </li>
        <li>React-router removes elements instantly</li>
      </ul>
    </ObnoxiousZoomIn>
  </CustomSlide>
);
