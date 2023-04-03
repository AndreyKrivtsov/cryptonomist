import { pairs } from './config/pairs.config'
import type { Pair } from '../../config/types'

export class Pairs {
    private readonly _pairsList: Pair[]
    constructor() {
        if (!pairs) {
            console.log(new Error('Not found pairs from config'))
        }
        this._pairsList = pairs
    }

    list() {
        return this._pairsList
    }

    getByAddress(address: string) {
        const token = this._pairsList.find(pair => pair.address === address)
        if (token) return token
        return null
    }

    getByTokens(tokenA: string, tokenB: string) {

    }
}