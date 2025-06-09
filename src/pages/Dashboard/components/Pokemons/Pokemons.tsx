import { useScrollDownPagination } from "hooks/useScrollDownPagination";
import type { Pokemon } from "models/pokemon.model";
import { useCallback, useEffect, useState } from "react";
import { getPokemons } from "services/pokemon.service";

import { LIMIT } from "./pokemons.config";
import { PokemonCard } from "./PokemonCard";
import { PokemonCardSkeleton } from "./PokemonCardSkeleton";

export const Pokemons = () => {

  const [Pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [Loading, setLoading] = useState(false)

  const {
    lastElementRef,
    skip: { Skip },
  } = useScrollDownPagination({ limit: LIMIT });

  const getPokemonsHandler = useCallback(async (skip: number) => {
    setLoading(true)
    try {
      const response = await getPokemons(LIMIT, skip);
      setPokemons((ste) => [...ste, ...response.data.results]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }, []);

  useEffect(() => {
    getPokemonsHandler(Skip);
  }, [getPokemonsHandler, Skip]);


  return (
    <div className="w-full flex flex-wrap justify-center px-[10%]">

    {Loading && <PokemonCardSkeleton />}

      {Pokemons.length > 0 ? (
        <>
          {Pokemons.map((pokemon) => (
            <div
              key={pokemon.name}
              className="w-1/2 md:w-1/4 flex justify-center my-2 px-2"
            >
              <PokemonCard pokemon={pokemon} />
            </div>
          ))}

          <div ref={lastElementRef as React.Ref<HTMLDivElement>}></div>
        </>
      ) : (
        <>No Pokemons</>
      )}
    </div>
  );
};
