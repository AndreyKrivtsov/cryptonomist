import { flatQubeDex } from './markets/flatQube/index'
import { ArbGraph, CalculateResult } from './strategy/arbitrage/ArbGraph'
import { pancakeDex } from './markets/pancake/index'
import { log, printResult } from './utils'

async function main() {
    const time = new Date()
    log(`\n==== Started [${time.toLocaleTimeString()}] ====\n`)
    pancake().then()
    flatQube().then()
}

async function pancake() {
    const profitNeed = 1
    pancakeDex.requestLog()
    const arbitrage = new ArbGraph(pancakeDex.pairsList())
    const paths = arbitrage.paths()
    const pricesPromises: Promise<CalculateResult | null>[] = []
    const goodPrices: CalculateResult[] = []
    paths.forEach(path => {
        pricesPromises.push(pancakeDex.price(path))
    })
    const prices = await Promise.all(pricesPromises)
    prices.forEach(price => {
        if (price && price.profit > profitNeed) {
            goodPrices.push(price)
        }
    })
    goodPrices.forEach(price => console.log(printResult(price, pancakeDex.tokensList())))
    if (!goodPrices.length) {
        pancakeDex.responseLog()
    }
    setTimeout(pancake, 1000)
}

async function flatQube() {
    const profitNeed = 1
    flatQubeDex.requestLog()
    const arbGraph = new ArbGraph(flatQubeDex.pairsList())
    const prices = await flatQubeDex.prices()
    const goodPrices: CalculateResult[] = []
    if (prices) {
        const result = arbGraph.calculate(prices)
        if (result) {
            result.forEach(price => {
                if (price.profit > profitNeed) {
                    goodPrices.push(price)
                }
            })
            goodPrices.forEach(price => console.log(printResult(price, flatQubeDex.tokensList())))
            if (!goodPrices.length) {
                flatQubeDex.responseLog()
            }
        }
    }

    setTimeout(await flatQube, 1000)
}

main()

