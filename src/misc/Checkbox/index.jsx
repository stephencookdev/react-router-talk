import React from "react";
import classNames from "classnames";
import styles from "./styles.scss";

export default ({ checked }) => (
  <div className={classNames(styles.checkbox, { [styles.checked]: checked })} />
);
