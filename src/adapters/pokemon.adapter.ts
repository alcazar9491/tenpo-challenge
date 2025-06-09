import type { PokemonData } from "models/pokemon.model";

export const getPokemonDataAdapter = (pokeData : PokemonData) => ({
    name:pokeData.name,
    abilities:pokeData.abilities,
    types:pokeData.types,
    height:pokeData.height,
    weight:pokeData.weight
})