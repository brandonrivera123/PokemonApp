import React, { useEffect, useState } from "react";
import styles from "./styles/stats.module.css";

export const Moves = ({ active, data }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(active === 1);
  }, [active]);

  return (
    <div
      style={{ height: 250, overflow: "auto" }}
      className={isActive ? styles.active : null}
    >
      {data.moves.map((item, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          {item.move.name}
        </div>
      ))}
    </div>
  );
};
