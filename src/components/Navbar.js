import React from "react";
import { useLocation } from "react-router-dom";
import pokeImage from "../assets/pokeapi.png";
import styles from "./styles/navbar.module.css";

export const Navbar = () => {
  const location = useLocation();
  return (
    <div className={styles.nav}>
      <img className={styles.nav__title} src={pokeImage} alt="poketitle" />
      {location.pathname === "/" && (
        <input className={styles.nav__input} type="text" />
      )}
    </div>
  );
};
