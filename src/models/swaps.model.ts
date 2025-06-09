export interface Swap {
    transactionHash: string
    transactionIndex: number
    transactionType: string
    baseQuotePrice: string
    entity: string
    entityLogo: string
    blockTimestamp: string
    blockNumber: number
    subCategory: string
    walletAddress: string
    walletAddressLabel: string
    pairAddress: string
    pairLabel: string
    exchangeName: string
    exchangeAddress: string
    exchangeLogo: string
    baseToken: string
    quoteToken: string
    bought: Bought
    sold: Sold
    totalValueUsd: number
  }
  
  export interface Bought {
    address: string
    amount: string
    usdPrice: number
    usdAmount: number
    symbol: string
    logo: string
    name: string
    tokenType: string
  }
  
  export interface Sold {
    address: string
    amount: string
    usdPrice: number
    usdAmount: number
    symbol: string
    logo: string
    name: string
    tokenType: string
  }
  

export interface ISwapsResponse {
    cursor:string;
    page:number;
    pageSize:number;
    result:Swap[]
}