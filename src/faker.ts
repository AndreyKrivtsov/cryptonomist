export const tokenA = {
    label: 'tokenA',
    address: '0x55d398326f99059fF775485246999027B3197955',
    decimal: 10,
}

export const tokenB = {
    label: 'tokenB',
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    decimal: 6,
}

export const tokenC = {
    label: 'tokenC',
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    decimal: 6,
}

export const pairA = {
    tokenA: tokenA,
    tokenB: tokenB,
    address: '0x0'
}

export const pairB = {
    tokenA: tokenA,
    tokenB: tokenC,
    address: '0x1'
}

export const pairC = {
    tokenA: tokenB,
    tokenB: tokenC,
    address: '0x1'
}

export const tokens = [tokenA, tokenB, tokenC]
export const pairs = [pairA, pairB, pairC]

export const pairAPrice = {
    pair: pairA,
    price: 1,
    reversePrice: 1
}

export const pairBPrice = {
    pair: pairB,
    price: 1,
    reversePrice: 1
}

export const pairCPrice = {
    pair: pairC,
    price: 1.1,
    reversePrice: 0.90909090909090909090909090909091
}

export const prices = [pairAPrice, pairBPrice, pairCPrice]