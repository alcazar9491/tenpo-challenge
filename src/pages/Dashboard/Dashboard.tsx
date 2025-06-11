import { useState, type ReactElement } from "react";
import { SelectApi } from "./components/SelectApi";
import { ApiOption } from "./types";
import { Pokemons } from "./components/Pokemons/Pokemons";
import { Swaps } from "./components/Swaps/Swaps";


const API_COMPONENT_MAP: Record<Exclude<ApiOption, ApiOption.empty>, ReactElement> = {
  [ApiOption.pokemon]: <Pokemons />,
  [ApiOption.swaps]: <Swaps />,
};

const Dashboard = () => {
  const [selectedApi, setSelectedApi] = useState<ApiOption>(ApiOption.empty);

  const renderContent = () => {
    if (selectedApi === ApiOption.empty) {
      return (
        <div className="w-full text-center dark:text-white p-8">
          <p className="text-lg">Please select an API to continue</p>
        </div>
      );
    }

    const Component = API_COMPONENT_MAP[selectedApi as Exclude<ApiOption, ApiOption.empty>];
    return Component || null;
  };

  return (
    <div className="w-full flex flex-wrap justify-center">
      <SelectApi selectedApi={selectedApi} setSelectedApi={setSelectedApi} />
      {renderContent()}
    </div>
  );
};

export default Dashboard;
