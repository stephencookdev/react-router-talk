import React from "react";
import CustomSlide from "../misc/CustomSlide";
import ObnoxiousZoomIn from "../misc/ObnoxiousZoomIn";
import success from "../images/success.gif";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <ObnoxiousZoomIn>
      <img src={success} />
    </ObnoxiousZoomIn>
  </CustomSlide>
);
