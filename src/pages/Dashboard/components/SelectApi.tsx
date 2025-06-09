import React from 'react'
import { ApiOption } from '../types';

interface ISelectApi {
    selectedApi:ApiOption;
    setSelectedApi: React.Dispatch<React.SetStateAction<ApiOption>>
}

const apiTabs = [
  { label: 'Pokemon', value: ApiOption.pokemon },
  { label: 'Swaps', value: ApiOption.swaps },
];

export const SelectApi = ({
    selectedApi,
    setSelectedApi
}:ISelectApi) => {
  return (
    <div className="flex gap-2 mb-4 ">
      {apiTabs.map(tab => (
        <button
          key={tab.value}
          className={`px-4 py-2 rounded-t border-b-2 transition-colors duration-200
            
            dark:text-white
            ${selectedApi === tab.value ? 'border-blue-500 bg-blue-100 dark:bg-blue-900' : 'border-transparent bg-gray-100 dark:bg-gray-800'}`}
          onClick={() => setSelectedApi(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
