import React from "react";
import { Card, Tooltip } from "components";
import styles from "./styles/home.module.css";

export const CardList = ({ isError, allPokemon, isLoading }) => {
  return (
    <div className={styles["cards-list"]}>
      {!isError &&
        allPokemon.map((item, index) => {
          return (
            <div className={styles["card-container"]} key={index}>
              <div className={styles["tooltip-container"]}>
                <Tooltip />
              </div>
              <Card
                img={item.sprites.front_default}
                name={item.name}
                type={item.types}
                id={item.id}
                // description={description[index]}
                loading={isLoading}
              />
            </div>
          );
        })}
      {isError && <p>Something went wrong</p>}
    </div>
  );
};
