import React from "react";
import { Navbar } from "components";
import { Routes, Route } from "react-router-dom";
import styles from "styles/app.module.css";
import { Home } from "pages/Home";
import { Stats } from "pages/Stats";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="stats/:pokemonId/:pokemonName" element={<Stats />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
