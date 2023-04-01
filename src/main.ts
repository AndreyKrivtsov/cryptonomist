import { FlatQubeDex } from './markets/flatQube/index'
import { CalculateResult, calculateTest, printResult } from './strategy/calculate'

async function main() {
    const time = new Date()
    console.log(`\n==== Started [${time.toLocaleTimeString()}] ====`)
    dex1()
}

async function dex1() {
    const flatQube = new FlatQubeDex()
    const dexPrices = await flatQube.getPrices()
    const goodPrices: CalculateResult[] = []
    if (dexPrices) {
        const result = calculateTest(dexPrices)
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

    setTimeout(dex1, 2000)
}

main()