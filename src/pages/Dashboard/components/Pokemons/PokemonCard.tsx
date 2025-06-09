import type { PokedataFormated, Pokemon } from "models/pokemon.model";
import { getPokeId } from "./utils";
import { useMemo, useState } from "react";
import { Modal } from "components/Modal/Modal";
import { getPokemon } from "services/pokemon.service";

import { getPokemonDataAdapter } from "adapters/pokemon.adapter";
import { PokeDex } from "./PokeDex";

interface IPokemonCard {
  pokemon: Pokemon;
}

const IMAGE_LINK = import.meta.env.VITE_POKEMON_API_PRODUCTION_IMAGE;

export const PokemonCard = ({ pokemon }: IPokemonCard) => {

  const [Pokedex, setPokedex] = useState<PokedataFormated>();
  const [Opened, setOpened] = useState(false);

  const handlerOpen = async () => {
    if (!Pokedex?.name) {
        try {
            const { data } = await getPokemon(pokemon.url);
            if (data.name) {
              setPokedex(getPokemonDataAdapter(data));
              setOpened(true);
            }
          } catch (error) {
            console.error(error);
          }
    } else {
        setOpened(true);
    }
  };

  const pokeImage = useMemo(() => `${IMAGE_LINK}/${getPokeId(pokemon.url)}.png`, [pokemon])

  return (
    <div
      className={`w-full flex flex-wrap bg-white dark:bg-[#222730] border-l-4 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border-blue-500  hover:border-green-500 hover:bg-green-50 justify-center items-center`}
    >
      <img
        className="w-full md:w-1/2"
        src={pokeImage}
        alt={pokemon.name}
      />
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
        <button
          onClick={handlerOpen}
          className="dark:text-[#c1c6cc] capitalize pokename transition-all duration-300 cursor-pointer hover:text-green-600 hover:scale-110 hover:drop-shadow-lg text-center md:text-left"
        >
          {pokemon.name}
        </button>
      </div>
      {Opened && 
      <Modal closeModal={setOpened} title="PokeDex" >
        {
            Pokedex !== undefined &&  <PokeDex pokeData={Pokedex} pokeImage={pokeImage}/>
        }  
      </Modal>
      }
    </div>
  );
};


