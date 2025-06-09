import axios from 'axios';
import type { PokemonData } from 'models/pokemon.model';

const POKEMON_API_URL = import.meta.env.VITE_POKEMON_API_PRODUCTION ;

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}
export interface PokemonDataResponse {
  data: PokemonData;
}

export const getPokemons = async (limit = 2000, offset = 0) =>  await axios.get<PokemonListResponse>(`${POKEMON_API_URL}?limit=${limit}&offset=${offset}`);
export const getPokemon = async (url:string):Promise<PokemonDataResponse> =>  await axios.get(url);
