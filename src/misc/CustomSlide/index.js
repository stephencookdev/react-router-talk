import React from "react";
import { ContentSlide } from "react-presents";
import classNames from "classnames";
import styles from "./styles.scss";

export default ({ children, title }) => (
  <ContentSlide
    className={classNames(styles["custom-slide"], {
      [styles["title-slide"]]: title
    })}
  >
    {children}
  </ContentSlide>
);
