import React from "react";
import { ABoxCompact, BBoxCompact } from "../Boxes";
import Ruler from "../Ruler";
import styles from "./styles.scss";

export const AToBTransition = () => (
  <figure className={styles.figure}>
    <div className={styles.rulerBoxContainer}>
      <Ruler min={0} max={1} pinClassName={styles.trueAPin} />
      <div className={styles.aBox}>
        <ABoxCompact />
      </div>
    </div>

    <div className={styles.rulerBoxContainer}>
      <Ruler
        min={0}
        max={1}
        className={styles.trueBRuler}
        pinClassName={styles.trueBPin}
      />
      <div className={styles.bBox}>
        <BBoxCompact />
      </div>
    </div>
  </figure>
);

export const AToBFakeTransition = () => (
  <figure className={styles.figure}>
    <div className={styles.rulerBoxContainer}>
      <Ruler min={0} max={1} pinClassName={styles.fakeAPin} />
      <div className={styles.aBox}>
        <ABoxCompact />
      </div>
    </div>

    <div className={styles.rulerBoxContainer}>
      <Ruler min={0} max={2} pinClassName={styles.fakeBPin} />
      <div className={styles.bBox}>
        <BBoxCompact />
      </div>
    </div>
  </figure>
);
