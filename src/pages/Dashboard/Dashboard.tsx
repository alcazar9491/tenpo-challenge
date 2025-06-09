import { useMemo, useState } from "react";

import { SelectApi } from "./components/SelectApi";
import { ApiOption } from "./types";
import { Pokemons } from "./components/Pokemons/Pokemons";
import { Swaps } from "./components/Swaps/Swaps";

const Dashboard = () => {

  const [SelectedApi, setSelectedApi] = useState<ApiOption>(ApiOption.empty);

  const ApiComponentMap = useMemo(
    () => ({
      pokemon: <Pokemons />,

        swaps: <Swaps />,
    }),
    []
  );

  return (
    <div className="w-full flex flex-wrap justify-center ">
      <SelectApi selectedApi={SelectedApi} setSelectedApi={setSelectedApi} />

      {
        SelectedApi !== "" ? ApiComponentMap[SelectedApi] : <div className="w-full text-center dark:text-white "> Please Selectet an Api to continue</div>
      }
    </div>
  );
};

export default Dashboard;
