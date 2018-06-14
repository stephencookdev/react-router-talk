import React from "react";
import styles from "./styles.scss";

const getLocation = (location, urlMap = {}) => {
  const path = location ? `#${location.pathname}` : window.location.hash;
  return urlMap[path] || path;
};

export default ({ children, location, urlMap, pathname }) => (
  <div className={styles.browser}>
    <div className={styles.urlBarContainer}>
      <div className={styles.urlBar}>{getLocation(location, urlMap)}</div>
    </div>

    {children}
  </div>
);
