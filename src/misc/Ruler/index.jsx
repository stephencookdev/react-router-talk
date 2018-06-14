import React from "react";
import classNames from "classnames";
import styles from "./styles.scss";

const baseTickCount = 60;

export default ({ min = 0, max = 1, className, pinClassName }) => {
  const tickCount = baseTickCount * (max - min);

  return (
    <div className={classNames(className, styles.ruler)} data-width={max - min}>
      <span className={classNames(pinClassName, styles.pin)} />
      {new Array(tickCount)
        .fill()
        .map((_, i) => (
          <span
            className={styles.tick}
            key={i}
            style={{ left: i * 100 / (tickCount - 1) + "%" }}
          />
        ))}
      <span className={styles.start}>{`${min}`}</span>
      <span className={styles.end}>{`${max}`}</span>
      <span className={styles.xAxisLabel}>{"t"}</span>
    </div>
  );
};
