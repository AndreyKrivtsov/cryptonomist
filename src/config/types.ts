import { CalculateResult } from '../strategy/arbitrage/Arbitrage'

export type PairPrice = {
    pair: Pair,
    price: number,
    reversePrice: number
}

export type Pair = {
    tokenA: Token
    tokenB: Token
    address: string
}

export type Token = {
    label: string
    address: string
    decimal: number
}

export interface IExchange {
    price(tokens: string[]): Promise<CalculateResult | null>
    prices(): Promise<PairPrice[] | null>
    pairsList(): Pair[]
    tokensList(): Token[]
}