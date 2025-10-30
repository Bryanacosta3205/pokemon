import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import PokemonCard from "./PokemonCard";
import { usePokemons } from "../hooks/usePokemon";
import PaginationControls from "./PaginationControls";
import { useState } from "react";

const PokemonList = () => {
  const [page, setPage] = useState(1);
  const limit = 100;
  const { pokemons, isLoading, error } = usePokemons(page, limit);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error has ocurred</div>;
  }
  if (!pokemons) {
    return;
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        columns={{ xs: 6, sm: 4, md: 16, lg: 16, xl: 24 }}
      >
        {pokemons.data.map((pokemon) => (
          <Grid
            key={`pokemon-${pokemon.name}`}
            size={{ xs: 3, sm: 2, md: 4, lg: 3, xl: 3 }}
          >
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>

      <PaginationControls
        onNext={() => setPage((p) => p + 1)}
        onPrev={() => setPage((p) => Math.max(p - 1, 1))}
        page={page}
      />
    </>
  );
};

export default PokemonList;
