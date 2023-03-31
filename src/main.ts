import { Dex1 } from './dex1/index'
import { CalculateResult, calculateTest, printResult } from './strategy/calculate'
import { mockQuotes } from './strategy/mockQuotes'

const prices = [
    { // 76.92
        pair: {
            tokenA: { label: 'rub', address: 'ybrtyvsrty', decimal: 10 },
            tokenB: { label: 'usd', address: 'einti8t8ibv', decimal: 10 },
            address: '234c245y45c'
        },
        price: 0.0130005200 // 0,01300052002080083203328133125325
    },
    { // 78.40
        pair: {
            tokenA: { label: 'rub', address: 'ybrtyvsrty', decimal: 10 },
            tokenB: { label: 'eur', address: 'c54356y45v7467', decimal: 10 },
            address: '8on689l5b7vc35'
        },
        price: 0.0127551020 // 0,01275510204081632653061224489796 \\ 78,399999999999999999999999999995
    },
    {
        pair: {
            tokenA: { label: 'usd', address: 'einti8t8ibv', decimal: 10 },
            tokenB: { label: 'eur', address: 'c54356y45v7467', decimal: 10 },
            address: 'btr7467v4v67'
        },
        price: 1.0192407696 // 1,0192407696307852314092563702547
    },
    {
        pair: {
            tokenA: { label: 'gbp', address: 'gye5y6ev56', decimal: 10 },
            tokenB: { label: 'rub', address: 'ybrtyvsrty', decimal: 10 },
            address: 'j76jr67he67h'
        },
        price: 1.0192407696 // 1,0192407696307852314092563702547
    },
    {
        pair: {
            tokenA: { label: 'usd', address: 'einti8t8ibv', decimal: 10 },
            tokenB: { label: 'gbp', address: 'gye5y6ev56', decimal: 10 },
            address: 'tyhe56e546'
        },
        price: 1.0192407696 // 1,0192407696307852314092563702547
    }
]

async function dex1() {
    const time = new Date()
    const dex = new Dex1()
    const dexPrices = await dex.getPrices()
    const goodPrices: CalculateResult[] = []
    if (dexPrices) {
        const result = calculateTest(dexPrices)
        if (result) {
            // printResult(result)
            result.forEach(price => {
                if (price.profit > 1.01) {
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

async function main() {
    const time = new Date()
    console.log(`\n==== Started [${time.toLocaleTimeString()}] ====`)
    dex1()
}

main()