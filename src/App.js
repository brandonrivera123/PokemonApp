import React from "react";
import { Navbar } from "components";
import { Routes, Route } from "react-router-dom";
import styles from "styles/app.module.css";
import { Home } from "pages/Home";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
