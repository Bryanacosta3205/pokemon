import { fetcher } from "./client";

const API_BASE = process.env.NEXT_PUBLIC_BASE_URL;

export async function getPokemons(page = 1, limit = 50) {
  return fetcher(`${API_BASE}/pokemons?limit=${limit}&page=${page}`);
}
