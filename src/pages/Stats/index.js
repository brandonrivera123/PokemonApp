import React, { useEffect, useState } from "react";
import { getPokemon } from "services";
import { useParams } from "react-router-dom";
import styles from "./styles/stats.module.css";

const Stats = () => {
  const { pokemonId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
            <div>Base Stats</div>
          </div>
          {data.stats.map((item, index) => (
            <StatRow key={index} item={item} />
          ))}
        </div>
      </div>
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

export default Stats;
