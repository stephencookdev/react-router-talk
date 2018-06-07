import React from "react";
import styles from "./styles.scss";

export default ({ children, urlMap }) => (
  <div className={styles.browser}>
    <div className={styles.urlBarContainer}>
      <div className={styles.urlBar}>
        {(urlMap && urlMap[location.hash]) || location.hash}
      </div>
    </div>

    {children}
  </div>
);
