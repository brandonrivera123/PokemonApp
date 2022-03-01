import React from "react";
import pokeImage from "../assets/pokeapi.png";
import styles from "./styles/navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <img className={styles.nav__title} src={pokeImage} alt="poketitle" />
      <input className={styles.nav__input} type="text" />
      {/* <div style={{ color: "white", fontSize: "2rem" }}>Pokemon</div> */}
    </div>
  );
};
