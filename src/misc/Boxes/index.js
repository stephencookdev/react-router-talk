import React from "react";
import styles from "./styles.scss";

const Box = ({ children, compact }) =>
  compact ? (
    <div className={styles.box}>{children}</div>
  ) : (
    <BoxContainer>
      <div className={styles.box}>{children}</div>
    </BoxContainer>
  );

export const BoxContainer = ({ children }) => (
  <div className={styles.centerBoxes}>{children}</div>
);

export const ABox = () => <Box>A</Box>;
export const BBox = () => <Box>B</Box>;
export const CBox = () => <Box>C</Box>;
export const XBox = ({ x }) => <Box>{x}</Box>;
export const ABoxCompact = () => <Box compact>A</Box>;
export const BBoxCompact = () => <Box compact>B</Box>;
export const CBoxCompact = () => <Box compact>C</Box>;
