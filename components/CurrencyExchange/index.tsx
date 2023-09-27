import Image from "next/image";

import {
    ModuleWrapper, ExchangeWrapper, ImageContainer, ImageWrapper
} from "@/components/CurrencyExchange/StyledExchange";

import CurrencyInputs from "@/components/CurrencyExchange/CurrencyInputs";
import {getExchangeRates, getExchangeSymbols} from "@/utils/exchangeUtils";
import {SymbolsResponse} from "@/types/exchangeTypes";

export default async function CurrencyExchange() {

    const symbols: SymbolsResponse = await getExchangeSymbols()


    return (
        <ModuleWrapper>
            <ExchangeWrapper>
                <ImageContainer>
                    <ImageWrapper>
                        <Image alt="Picture of the author" src='currencySVG.svg'
                               sizes="100vw"
                               priority={true}
                               style={{
                                   width: '100%',
                                   height: 'auto',
                               }}
                               width={500}
                               height={300}/>
                    </ImageWrapper>
                </ImageContainer>

                <CurrencyInputs symbols={symbols.symbols}/>
            </ExchangeWrapper>
        </ModuleWrapper>
    );
};

