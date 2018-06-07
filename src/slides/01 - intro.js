import React from "react";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <h1>Native-Like Transitions with React Router</h1>
    <span className={styles.subtitle}>(without losing your mind)</span>
  </CustomSlide>
);
