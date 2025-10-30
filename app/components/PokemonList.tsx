import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";
import { usePokemons } from "../hooks/usePokemon";
import PaginationControls from "./PaginationControls";
import { useState } from "react";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const GRID_CONFIG = {
  container: true,
  spacing: 2,
  columns: { xs: 6, sm: 4, md: 16, lg: 16, xl: 24 },
};
const GRID_ITEM_SIZE = { xs: 3, sm: 2, md: 4, lg: 3, xl: 3 };
const SKELETON_COUNT = 12;
const DEFAULT_ITEMS_PER_PAGE = 100;

const PokemonList = () => {
  const [page, setPage] = useState(1);
  const { pokemons, isLoading, error } = usePokemons(
    page,
    DEFAULT_ITEMS_PER_PAGE
  );

  if (error) {
    return <div>An error has ocurred</div>;
  }

  return (
    <>
      <Grid {...GRID_CONFIG}>
        {isLoading || !pokemons
          ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
              <Grid key={`skeleton-${index}`} size={GRID_ITEM_SIZE}>
                <PokemonCardSkeleton />
              </Grid>
            ))
          : pokemons.data.map((pokemon) => (
              <Grid key={`pokemon-${pokemon.name}`} size={GRID_ITEM_SIZE}>
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
