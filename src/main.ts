import { flatQubeDex } from './markets/flatQube/index'
import { Arbitrage, CalculateResult } from './strategy/arbitrage/Arbitrage'
import { pancakeDex } from './markets/pancake/index'
import { Token } from './config/types'

const cache: string[] = []

async function main() {
    const time = new Date()
    console.log(`\n==== Started [${time.toLocaleTimeString()}] ====`)
    flatQube()
    pancake()
}

async function pancake() {
    process.stdout.write('.')
    const arbitrage = new Arbitrage(pancakeDex.pairsList())
    const paths = arbitrage.paths()
    const pricesPromises: Promise<CalculateResult | null>[] = []
    const goodPrices: CalculateResult[] = []
    paths.forEach(path => {
        pricesPromises.push(pancakeDex.price(path))
    })
    const prices = await Promise.all(pricesPromises)
    prices.forEach(price => {
        if (price && price.profit > 1) {
            goodPrices.push(price)
        }
    })
    goodPrices.forEach(price => console.log(printResult(price, pancakeDex.tokensList())))
    if (!goodPrices.length) {
        process.stdout.write('p')
    }
    setTimeout(pancake, 1000)
}

async function flatQube() {
    process.stdout.write('.')
    const arbitrage = new Arbitrage(flatQubeDex.pairsList())
    // arbitrage.paths().forEach(path => {
    //     console.log(printPath(path, flatQubeDex.tokensList()))
    // })
    const prices = await flatQubeDex.prices()
    const goodPrices: CalculateResult[] = []
    if (prices) {
        const result = arbitrage.calculate(prices)
        if (result) {
            result.forEach(price => {
                if (price.profit > 1.01) {
                    goodPrices.push(price)
                }
            })
            goodPrices.forEach(price => console.log(printResult(price, flatQubeDex.tokensList())))
            if (!goodPrices.length) {
                process.stdout.write('f')
            }
        }
    }

    setTimeout(await flatQube, 1000)
}

main()

function printResults(result: CalculateResult[], tokens: Token[]) {
    const time = new Date()
    let str = ''
    result.forEach(currentPath => {
        const path: string = printPath(currentPath.path, tokens).join(' - ')
        str += `\n[${time.toLocaleTimeString()}] ${path}, cost: ${currentPath.profit}`
    })
    return str
}

function printResult(result: CalculateResult, tokens: Token[]) {
    const time = new Date()
    const path: string = printPath(result.path, tokens).join(' - ')
    return `\n[${time.toLocaleTimeString()}] ${path}, cost: ${result.profit}`
}

function printPath(path: string[], tokens: Token[]) {
    return path.map(id => {
        return tokens.find(token => token.address === id)?.label
    })
}