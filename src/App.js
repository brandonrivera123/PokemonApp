import { lazy, Suspense } from "react";
import { Navbar } from "components";
import { Routes, Route } from "react-router-dom";
import styles from "styles/app.module.css";
import ErrorBoundary from "components/ErrorBoundary";
// import { Home } from "pages/Home";
// import { Stats } from "pages/Stats";
const Home = lazy(() => import("pages/Home"));
const Stats = lazy(() => import("pages/Stats"));

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.body}>
        <ErrorBoundary>
          <Suspense fallback={<div>...Loading</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="stats/:pokemonId/:pokemonName" element={<Stats />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
