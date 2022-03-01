import React from "react";
import { colors } from "theme";
import styles from "./styles/badge.module.css";

export const Badge = ({ item }) => {
  return (
    <div
      className={styles.type}
      style={{
        color: `${colors[item.type.name] ? colors[item.type.name] : "white"}`,
      }}
    >
      {item.type.name}
    </div>
  );
};
