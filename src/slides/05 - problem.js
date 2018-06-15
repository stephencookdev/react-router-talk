import React from "react";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import ObnoxiousZoomIn from "../misc/ObnoxiousZoomIn";
import styles from "./common.scss";

export default () => (
  <CustomSlide>
    <ObnoxiousZoomIn>
      <h1>The Problem</h1>
      <div className={classNames(styles.hugeText, styles.centerWithHeader)}>
        <span className={styles.main}>Animations have no history</span>
        vs.
        <span className={styles.main}>
          <code>react-router</code> removes elements instantly
        </span>
      </div>
    </ObnoxiousZoomIn>
  </CustomSlide>
);
