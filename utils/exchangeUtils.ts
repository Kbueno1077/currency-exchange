import {CacheExchangeRate, ExchangeRateResponse, SymbolsResponse} from "@/types/exchangeTypes";

export const getExchangeRates = async (): Promise<ExchangeRateResponse> => {
    const response = await fetch(process.env.API_URL)
    return await response.json()
}

export const getExchangeSymbols = async (): Promise<SymbolsResponse> => {
    const response = await fetch(process.env.API_URL,)
    return await response.json()
}





