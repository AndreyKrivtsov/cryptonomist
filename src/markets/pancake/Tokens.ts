import { tokens } from './config/tokens.config'
import type { Token } from '../../config/types'

export class Tokens {
    private readonly _tokenList: Token[]
    constructor() {
        this._tokenList = tokens
    }

    list() {
        return this._tokenList
    }

    getByAddress(address: string) {
        const token = this._tokenList.find(token => token.address === address)
        if (token) return token
        return null
    }

    getByLabel(label: string) {
        const token = this._tokenList.find(token => token.label === label)
        if (token) return token
        return null
    }
}