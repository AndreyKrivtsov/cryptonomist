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

