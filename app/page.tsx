"use client";

import PokemonList from "./components/PokemonList";

const PokedexPage = () => {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-5xl  text-neutral-700 font-bold">Pokedex</h1>
        <span className="text-lg">Gotta Catch 'Em All!</span>
      </div>
      <PokemonList />
    </main>
  );
};

export default PokedexPage;
