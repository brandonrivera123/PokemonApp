import React from "react";
import styles from "./styles/loader.module.css";

export const Loader = () => {
  return (
    <div
      className={styles.loader}
      style={{ background: "#333333", height: "140px" }}
    >
      <div className={styles["lds-ripple"]}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
