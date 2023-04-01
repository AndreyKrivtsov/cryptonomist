import { IExchange } from '../../types'
import { Account, ContractPackage } from '@eversdk/appkit'
import { Pair, Quote, Token } from '../../config/types.config'
import { pairContract } from './contracts/pair.contract'
import { client } from './client'
import { pairs } from './config/pairs.config'
import { tokens } from './config/tokens.config'

type Response = {
    pairAddress: string
    expectedAmount: number
    expectedFee: number
    reverse: boolean
}

const Contract: ContractPackage = {
    abi: pairContract.abi,
    tvc: pairContract.tvc
}

export class FlatQubeDex implements IExchange {
    _prices: string[]
    _contract: ContractPackage

    constructor() {
        this._prices = ['']
        this._contract = Contract
    }

    async getPrices(): Promise<Quote[] | null> {
        const promises: Promise<Response | null>[] = []
        const reversePromises: Promise<Response | null>[] = []
        pairs.forEach(pair => {
            const amount = 10**pair.tokenA.decimal // 1 with decimals
            const promise = this.getExpectedChange(pair)
            promises.push(promise)
        })
        pairs.forEach(pair => {
            const amount = 10**pair.tokenA.decimal // 1 with decimals
            const promise = this.getExpectedChange(pair, true)
            reversePromises.push(promise)
        })
        const expected = await Promise.all(promises)
        const expectedReverse = await Promise.all(reversePromises)
        if (expected) {
            return expected.map((price, index) => {
                return {
                    pair: pairs[index],
                    price: Number(price?.expectedAmount) ?? 0,
                    reversePrice: Number(expectedReverse[index]?.expectedAmount) ?? 0
                }
            })
        }
        return null
    }

    async getExpectedChange(pair: Pair, reverse: boolean = false): Promise<Response | null> {
        const acc = new Account(this._contract, { address: pair.address, client })
        const params = {
            answerId: 0,
            amount: reverse ? 10**pair.tokenB.decimal : 10**pair.tokenA.decimal,
            spent_token_root: reverse ? pair.tokenB.address : pair.tokenA.address
        }
        try {
            const response = await acc.runLocal('expectedExchange', params)
            if (!response?.decoded?.output) {
                return null
            }
            const divider = reverse ? 10**pair.tokenA.decimal : 10**pair.tokenB.decimal
            return {
                pairAddress: pair.address,
                expectedAmount: parseInt(response.decoded.output.expected_amount) / divider,
                expectedFee: Number(response.decoded.output.expected_fee) / divider,
                reverse
            }
        } catch (e) {
            console.error(e)
            return null
        }
    }

    tokenList() {
        return tokens
    }
}