import { IExchange, PairPrice } from '../../config/types'
import { Contract, formatUnits, parseUnits } from 'ethers'
import { provider } from './client'
import { Pairs } from './Pairs'
import { Tokens } from './Tokens'
import { CalculateResult } from '../../strategy/arbitrage/Arbitrage'

const abi = [
    'function getAmountsOut(uint amountIn, address[] path) view returns (uint[] memory amounts)'
]


export class PancakeDex implements IExchange {
    // contract: ContractPackage
    private pairs: Pairs
    private tokens: Tokens

    constructor(pairs: Pairs, tokens: Tokens) {
        this.pairs = pairs
        this.tokens = tokens
        // this.contract = Contract
    }

    async price(tokensPath: string[]): Promise<CalculateResult | null> {
        const baseToken = this.tokensList().find(token => token.address === tokensPath[1])
        if (!baseToken) return null
        const amount = parseUnits('1', baseToken.decimal)
        if (tokensPath.length) {
            const contract = new Contract('0x10ED43C718714eb63d5aA57B78B54704E256024E', abi, provider)
            try {
                const result = await contract.getAmountsOut(amount, tokensPath)

                return {
                    path: tokensPath,
                    profit: Number(formatUnits(result[result.length - 1], baseToken.decimal))
                }
            } catch (e) {
                console.log('NEW ERROR', e)
                return null
            }
        }

        return null
    }

    async prices(): Promise<PairPrice[] | null> {
        return null
    }

    pairsList() {
        return this.pairs.list()
    }

    tokensList() {
        return this.tokens.list()
    }
}