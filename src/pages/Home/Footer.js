import React from "react";
import { Button } from "components";
import styles from "./styles/home.module.css";

export const Footer = ({ previousUrl, nextUrl, getPokemonInfo }) => {
  return (
    <div className={styles.footer}>
      <Button
        type="button"
        name="Previous"
        disabled={!previousUrl}
        onClick={() => getPokemonInfo(previousUrl)}
      />
      <Button
        type="button"
        name="Next"
        disabled={!nextUrl}
        onClick={() => getPokemonInfo(nextUrl)}
      />
    </div>
  );
};
