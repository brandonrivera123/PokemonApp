export function getPokemon(url) {
  //   console.log(url);
  return Promise.resolve({ results: "test" });
}

export async function pokemonLists(result) {
  let pokemons = [];
  for (const pokemon of result) {
    const data = await fetch(`${pokemon.url}`).then((res) => res.json());
    pokemons.push(data);
  }
  return pokemons;
}

export async function pokemonDescription(result) {
  let descriptions = [];
  for (const pokemon of result) {
    const data = await fetch(`${pokemon.species.url}`).then((res) =>
      res.json()
    );
    //     const data = await fetch(`https://pokeapi.co/api/v2/characteristic/${pokemon.id}/`).then((res) =>
    //     res.json()
    //   );
    descriptions.push(data.flavor_text_entries[0].flavor_text);
  }
  return descriptions;
}
