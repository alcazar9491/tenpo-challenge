export const PokemonCardSkeleton = () => (
    <div className="w-full flex flex-wrap bg-white border-l-4 rounded-lg shadow-sm p-4 border-blue-200 animate-pulse justify-center items-center min-h-[180px]">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center mt-2 md:mt-0">
        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );