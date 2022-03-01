import React from "react";
import styles from "./styles/tooltip.module.css";

export const Tooltip = () => {
  return (
    <div className={styles.tooltip}>
      i
      <span className={`${styles.tooltiptext} ${styles["tooltip-bottom"]}`}>
        Todo
      </span>
    </div>
  );
};
