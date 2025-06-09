import type { Swap } from "models/swaps.model";
import { useCallback, useEffect, useState } from "react";
import { getMoralisSwaps } from "services/moralis.service";
import { SwapsTable } from "./SwapsTable";

const LIMIT = 50;
export const Swaps = () => {
  const [Loading, setLoading] = useState(false);
  const [Cursor, setCursor] = useState<string>("");
  const [Swaps, setSwaps] = useState<Swap[]>([]);

  const getSwapsHandler = useCallback(async (cursor: string) => {
    setLoading(true);
    try {
      const response = await getMoralisSwaps(LIMIT, cursor);

      setCursor(response.cursor);
      setSwaps((ste) => [...ste, ...response.result]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getSwapsHandler("");
  }, [getSwapsHandler]);

  return (
    <div className="w-full flex flex-wrap justify-center px-[10%]">
      {Swaps.length > 0 ? (
        <>
          <SwapsTable swaps={Swaps} />
          <button
            className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700transition-colors font-medium"
            onClick={() => getSwapsHandler(Cursor)}
          >
            {" "}
            Load More
          </button>
        </>
      ) : (
        <>{Loading ? <>Loading</> : <>No Results</>}</>
      )}
    </div>
  );
};
