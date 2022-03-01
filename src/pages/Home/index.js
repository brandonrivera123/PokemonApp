import React, { useState, useEffect } from "react";
import {
  getPokemon,
  pokemonLists,
  // pokemonDescription
} from "services";
import { CardList } from "./CardList";
import { Footer } from "./Footer";

export const Home = () => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  const [allPokemon, setAllPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [previousUrl, setPreviousUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [description, setDescription] = useState([]);

  async function getPokemonInfo(url) {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await getPokemon(url);
      // console.log(data);
      setNextUrl(data.next);
      setPreviousUrl(data.previous);
      const list = await pokemonLists(data.results);
      setAllPokemon(list);
      // const description = await pokemonDescription(list);
      // setDescription(description);
      // const test = await Promise.all([list, description]);
      // console.log(test[0]);
      // setAllPokemon(test[0]);
      // setDescription(test[1]);
      setIsLoading(false);
    } catch (err) {
      console.error("Something went wrong", err);
      setIsError(true);
    }
  }

  useEffect(() => {
    getPokemonInfo(baseUrl);
  }, []);

  return (
    <>
      <CardList
        isError={isError}
        allPokemon={allPokemon}
        isLoading={isLoading}
      />
      <Footer
        previousUrl={previousUrl}
        nextUrl={nextUrl}
        getPokemonInfo={getPokemonInfo}
      />
    </>
  );
};
