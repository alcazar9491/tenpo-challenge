import type { Character } from "models/character.model";

export const createCharacterAdapter = (characterList : Character[]) => characterList.map( character => ({
    name: character.name
}))