import {ExchangeRateResponse, SymbolsResponse} from "@/types/exchangeTypes";

export const getExchangeRates = async (): Promise<ExchangeRateResponse> => {
    const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=8957f789014e0744e723aa3681a724b4`,)
    return await response.json()
}

export const getExchangeSymbols = async (): Promise<SymbolsResponse> => {
    const response = await fetch(`http://api.exchangeratesapi.io/v1/symbols?access_key=8957f789014e0744e723aa3681a724b4`,)
    return await response.json()
}

