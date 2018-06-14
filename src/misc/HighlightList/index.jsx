import React from "react";
import { Step } from "react-presents";
import { Route } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.scss";

export default ({ items }) => {
  let itemsCount = 0;
  const cookedItems = items.map(it => {
    const cookedIt = typeof it === "string" ? { text: it, count: 1 } : it;
    const startIndex = itemsCount;
    const endIndex = itemsCount + cookedIt.count;
    itemsCount = endIndex;

    return {
      text: cookedIt.text,
      startIndex,
      endIndex
    };
  });

  return (
    <ul className={styles.list}>
      <Step index={0} maxIndex={itemsCount}>
        {""}
      </Step>
      <Route
        path={`/(.*)/:n`}
        render={({ match }) => {
          const n = parseInt(match.params.n);
          return cookedItems.map((item, i) => (
            <li
              key={i}
              className={classNames({
                [styles.active]:
                  n === 0 || (n >= item.startIndex + 1 && n < item.endIndex + 1)
              })}
            >
              {item.text}
            </li>
          ));
        }}
      />
    </ul>
  );
};
