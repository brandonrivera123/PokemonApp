import React, { useState, useEffect } from "react";
import styles from "./styles/stats.module.css";

export const BaseStats = ({ active, data }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active === 0);
  }, [active]);

  return (
    <div
      // style={{ visibility: active !== 0 && "hidden" }}
      className={isActive ? styles.active : null}
    >
      {data.stats.map((item, index) => (
        <StatRow key={index} item={item} />
      ))}
    </div>
  );
};

const StatRow = ({ item }) => {
  return (
    <div className={styles.stat__row}>
      <div>{item.stat.name}</div>
      <div>{item.base_stat}</div>
      <div className={styles.progress}>
        <div
          className={styles.progress__bar}
          style={{
            width: `${item.base_stat}%`,
            background: item.base_stat < 50 && "#ff2f00d1",
          }}
        ></div>
      </div>
    </div>
  );
};
