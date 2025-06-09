import axios from 'axios';
import type { ISwapsResponse } from 'models/swaps.model';

const apiKey = import.meta.env.VITE_MORALIS_KEY;



export const getMoralisSwaps = async (limit:number, cursor:string): Promise<ISwapsResponse> => {
  const response = await axios.get<ISwapsResponse>(
    `https://deep-index.moralis.io/api/v2.2/erc20/0x6982508145454ce325ddbe47a25d4ec3d2311933/swaps?chain=eth&order=DESC&limit=${limit}${cursor ? `&cursor=${cursor}` : ''}`
    , {
    headers: {
      'X-API-Key': apiKey,
    },
  });
  return response.data;
};