import useSWR from "swr";
import { getPokemons } from "../lib/api/pokemon";
import { CACHE_KEYS } from "../lib/utils/cacheKeys";
import { PokeApiResponse } from "../interfaces/pokemon";

export function usePokemons(page: number, limit: number) {
  const key = [CACHE_KEYS.POKEMONS, page, limit];

  const { data, error, isLoading } = useSWR<PokeApiResponse>(
    key,
    () => getPokemons(page, limit),
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    }
  );

  return {
    pokemons: data,
    error,
    isLoading,
  };
}
