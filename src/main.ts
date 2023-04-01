import { flatQubeDex } from './markets/flatQube/index'
import { Arbitrage, CalculateResult } from './strategy/arbitrage/Arbitrage'
import { tokens } from './markets/flatQube/config/tokens.config'

async function main() {
    const time = new Date()
    console.log(`\n==== Started [${time.toLocaleTimeString()}] ====`)
    flatQube()
}

async function flatQube() {
    const arbitrage = new Arbitrage(flatQubeDex.pairsList())
    const prices = await flatQubeDex.prices()
    const goodPrices: CalculateResult[] = []
    if (prices) {
        const result = arbitrage.calculate(prices)
        if (result) {
            result.forEach(price => {
                if (price.profit > 1) {
                    goodPrices.push(price)
                }
            })
            if (goodPrices.length) {
                console.log('\n', printResult(goodPrices))
            } else {
                process.stdout.write('.')
            }
        }
    }

    setTimeout(flatQube, 2000)
}

main()

function printResult(result: CalculateResult[]) {
    const time = new Date()
    let str = ''
    result.forEach(path => {
        str += `[${time.toLocaleTimeString()}] ${printPath(path.path).join(' - ')}, cost: ${path.profit}\n`
    })
    return str
}

function printPath(path: string[]) {
    return path.map(id => {
        return tokens.find(token => token.address === id)?.label
    })
}