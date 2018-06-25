import React from "react";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import onfidoLogo from "../images/onfido.png";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <span className={classNames(styles.me, styles.twitter)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20vh"
        height="20vh"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
      <span className={styles.pink}>@</span>StephenCookDev
    </span>
    <span className={styles.me}>https://stephencookdev.co.uk/</span>

    <hr className={styles.pink} />

    <span className={styles.me}>
      <img src={onfidoLogo} alt="Onfido" style={{ height: "10vh" }} />
      https://onfido.com/careers/
    </span>
  </CustomSlide>
);
