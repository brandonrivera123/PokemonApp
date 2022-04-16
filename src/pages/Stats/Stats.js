import React, { useEffect, useState } from "react";
import { getPokemon } from "services";
import { useParams } from "react-router-dom";
import { BaseStats } from "./BaseStats";
import { Moves } from "./Moves";
import styles from "./styles/stats.module.css";

const tabHeaders = ["Base Stats", "Moves", "Types", "Berries"];

const Stats = () => {
  const { pokemonId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [active, setActive] = useState(0);

  async function getPokemonInfo(url) {
    try {
      setLoading(true);
      setData(await getPokemon(url));
      setLoading(false);
    } catch (err) {
      console.error("Something went wrong", err);
      setError(true);
    }
  }

  useEffect(() => {
    getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
  }, [pokemonId]);

  if (loading) return <div>...loading</div>;
  if (error || !data) return <div>something went wrong</div>;

  return (
    <div style={{ marginTop: 70, padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={styles.card__media}
          style={{ backgroundImage: `url(${data.sprites.front_default})` }}
        />
      </div>
      <div className={styles.stat__container}>
        <div className={styles.stat__card}>
          <div className={styles.stat__header}>
            {tabHeaders.map((item, index) => (
              <StatHeaders
                key={index}
                index={index}
                item={item}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
          <div
            style={{ left: `calc(calc(100% / 4) * ${active}` }}
            className={styles["tab-indicator"]}
          ></div>
          <StatBody active={active}>
            <BaseStats active={active} data={data} />
            <Moves active={active} data={data} />
          </StatBody>
        </div>
      </div>
    </div>
  );
};

const StatBody = ({ children, active }) => {
  return <div className={styles["tab-body"]}>{children[active]}</div>;
};

const StatHeaders = ({ item, index, active, setActive }) => {
  return (
    <div
      onClick={() => setActive(index)}
      className={active === index ? styles.active : null}
    >
      {item}
    </div>
  );
};

export default Stats;
