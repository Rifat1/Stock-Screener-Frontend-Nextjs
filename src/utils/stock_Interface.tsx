// types.ts
export type Stock = {
    Symbol: string;
    MarketCap_Billions: number;
    TrailingPE: number;
    ForwardPE: number;
    TrailingAnnualDividendYield: number;
    FiveYearAvgDividendYield: number;
    PayoutRatio: number;
    ROE: number;
    ROA: number;
    ROE_TTM: number;
    ROA_TTM: number;
  } 

  export interface StockDetail {
    // Define  stock detail fields
    
  }