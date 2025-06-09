import type { PokedataFormated } from "models/pokemon.model";

interface IpokeDex {
    pokeData: PokedataFormated;
    pokeImage: string;
}

export const PokeDex = ({ pokeData, pokeImage }: IpokeDex) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md mx-auto flex flex-wrap justify-center">
      <h2 className="text-2xl w-full font-bold text-center mb-4 capitalize text-blue-700 dark:text-blue-300">
        {pokeData.name}
      </h2>
      <img className="w-1/2" src={pokeImage} alt="pokemon" />
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <div className="w-full">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
            Types
          </label>
          <div className="flex gap-2 flex-wrap">
            {pokeData.types.map((type) => (
              <span
                key={type.type.name}
                className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-semibold shadow"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
            Abilities
          </label>
          <div className="flex gap-2 flex-wrap">
            {pokeData.abilities.map((ability) => (
              <span
                key={ability.ability.name}
                className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 text-xs font-semibold shadow"
              >
                {ability.ability.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <div className="text-center flex-1">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
            Height
          </label>
          <span className="text-lg font-bold text-gray-800 dark:text-gray-200">{pokeData.height}</span>
        </div>
        <div className="text-center flex-1">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
            Weight
          </label>
          <span className="text-lg font-bold text-gray-800 dark:text-gray-200">{pokeData.weight}</span>
        </div>
      </div>
    </div>
  );
};
