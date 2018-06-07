import React from "react";
import { Step } from "react-presents";
import { Route } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.scss";

export default ({ items }) => (
  <ul className={styles.list}>
    <Step index={0} maxIndex={items.length}>
      {""}
    </Step>
    <Route
      path={`/(.*)/:n`}
      render={({ match }) =>
        items.map((item, i) => (
          <li
            key={i}
            className={classNames({
              [styles.active]: [0, i + 1].includes(parseInt(match.params.n))
            })}
          >
            {item}
          </li>
        ))
      }
    />
  </ul>
);
