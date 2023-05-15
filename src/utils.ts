import { CalculateResult } from './strategy/arbitrage/ArbGraph'
import { Token } from './config/types'

export function log(data: any) {
    process.stdout.write(data)
}

export function randomId() {
    const length = 2
    return new Array(length)
        .fill(0)
        .map(() => {
            let randomValues = Math.floor(Math.random() * 255).toString(16)
            if (randomValues.length % 2) {
                randomValues = '0' + randomValues
            }
            return randomValues
        })
        .join('')
}

export function printResult(result: CalculateResult, tokens: Token[]) {
    const time = new Date()
    const path: string = printPath(result.path, tokens).join(' - ')
    return `\n[${time.toLocaleTimeString()}] ${path}, cost: ${result.profit}`
}

export function printResults(result: CalculateResult[], tokens: Token[]) {
    const time = new Date()
    let str = ''
    result.forEach(currentPath => {
        const path: string = printPath(currentPath.path, tokens).join(' - ')
        str += `\n[${time.toLocaleTimeString()}] ${path}, cost: ${currentPath.profit}`
    })
    return str
}

export function printPath(path: string[], tokens: Token[]) {
    return path.map(id => {
        return tokens.find(token => token.address === id)?.label
    })
}