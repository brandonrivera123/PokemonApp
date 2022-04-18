import React from "react";
import { Ripple } from ".";
import styles from "./styles/button.module.css";

export const Button = ({ name = "button", ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <Ripple />
      <span data-testid="button-name" className={styles.button__span}>
        {name}
      </span>
    </button>
  );
};
