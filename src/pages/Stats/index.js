import React, { useEffect, useState } from "react";
import { getPokemon } from "services";
import { useParams } from "react-router-dom";

export const Stats = () => {
  const { pokemonId } = useParams();
  const [data, setData] = useState({});
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
    getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }, [pokemonId]);

  if (loading) return <div>...loading</div>;
  if (error) return <div>something went wrong</div>;

  return <div style={{ marginTop: 70, padding: "2rem" }}>{data.weight}</div>;
};
