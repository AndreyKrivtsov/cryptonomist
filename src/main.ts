import { flatQubeDex } from './markets/flatQube/index'
import { calculate, CalculateResult, printResult } from './strategy/arbitrage/calculate'

async function main() {
    const time = new Date()
    console.log(`\n==== Started [${time.toLocaleTimeString()}] ====`)
    flatQube()
}

async function flatQube() {
    const prices = await flatQubeDex.prices()
    const goodPrices: CalculateResult[] = []
    if (prices) {
        const result = calculate(prices)
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