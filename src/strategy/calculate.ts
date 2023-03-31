import { Quote } from '../config/types.config'
import { graphFabric } from './graphFabric'
import { Node, Nodes } from './Graph'
import { graphPrint } from './graphPrint'
import { tokens } from '../dex1/config/tokens.config'

export type CalculateResult = {
    path: string[],
    profit: number
}

export function calculateTest(quotes: Quote[], tokenList = tokens): CalculateResult[] | null {
    const tokenGraph = graphFabric(quotes)
    const graph = tokenGraph.getGraph()
    const paths = dfs(graph, graph[Object.keys(graph)[1]])
    // console.log(graphPrint(graph))
    // console.log('Result', paths.map(path => printPath(path)))

    const result: CalculateResult[] = []
    let error = false
    paths.forEach((path) => {
        const calculateResult = {
            path: path,
            profit: 0
        }
        let cost = 1

        path.forEach((nodeFirstId, index, array) => {
            const nodeFirst = graph[nodeFirstId]
            const nodeSecond = graph[array[index + 1]]

            if (nodeSecond) {
                const costResult = getCost(quotes, nodeFirst, nodeSecond)
                if (costResult) {
                    cost *= costResult
                } else {
                    error = true
                    console.log(new Error(`Error width calculate costs. Pair not found.`))
                }
            }
        })
        calculateResult.profit = cost
        // console.log('Quotes:', cost)
        result.push(calculateResult)
    })

    return error? null : result
}

function getCost(quotes: Quote[], nodeA: Node, nodeB: Node) {
    let pair: Quote | undefined
    let reverse = false
    quotes.forEach(quote => {
        if (
            quote.pair.tokenA.address === nodeA.id &&
            quote.pair.tokenB.address === nodeB.id
        ) {
            pair = quote
        } else if (
            quote.pair.tokenA.address === nodeB.id &&
            quote.pair.tokenB.address === nodeA.id
        ) {
            pair = quote
            reverse = true
        }
    })
    if (pair) {
        if (reverse) {
            return pair.reversePrice
        } else {
            return pair.price
        }
    } else {
        return null
    }
}

function dfs(graph: Nodes, startVertex: Node) {
    const MAX_DEPTH = 10
    const startVertexNeighborsKeys = Object.keys(startVertex.edges)
    const paths: string[][] = []

    // console.log(`Старт алгоритма. Токен ${getToken(startVertex.id)}`)

    const go = (vertex: Node, prevVertex: Node, _counter: number, _path: string[] = []) => {
        const path = [..._path]
        const counter = _counter
        if (counter > MAX_DEPTH - 1) return []
        // console.log(printPath(path))
        // console.log(`[${getToken(vertex.id)}] Вход в ${getToken(vertex.id)} из ${getToken(prevVertex.id)}`)
        // console.log(path.includes(vertex.id))
        if (!path.includes(vertex.id)) {
            path.push(vertex.id)
            // console.log(`[${getToken(vertex.id)}] Ищем соседей`)
            const neighbors = graph[vertex.id].edges
            const neighborsKeys = Object.keys(neighbors)

            // console.log(`[${getToken(vertex.id)}] Найдены соседи:`)
            // neighborsKeys.forEach(key => console.log(getToken(key)))
            neighborsKeys.forEach(neighborKey => {
                // console.log(`[${getToken(vertex.id)}] Идем в соседа: ${getToken(neighborKey)}`)
                const nextVertex = graph[neighborKey]
                go(nextVertex, vertex, counter + 1, path)
                // const result = go(nextVertex, vertex, counter + 1, path)
                // if (result) {
                    // console.log(printPath(result))
                    // const array = [...result]
                    // paths.push(array)
                // }
            })
        } else {
            // console.log(`[${getToken(vertex.id)}] Упс. Повтор`)
            // console.log(`Сравниваем ${getToken(vertex.id)} ${getToken(startVertex.id)}`)
                if (vertex.id === startVertex.id && path.length > 2) {
                    path.push(vertex.id)
                    // console.log(`Сохраняем ${printPath(path)}`)
                    paths.push([...path])
                }
        }
    }

    // console.log(`[${getToken(startVertex.id)}] Ищем соседей`)
    // console.log(`[${getToken(startVertex.id)}] Найдены соседи:`)
    // startVertexNeighborsKeys.forEach(key => console.log(getToken(key)))
    const path: string[] = []
    path.push(startVertex.id)
    startVertexNeighborsKeys.forEach(key => {
        // console.log(`[${getToken(startVertex.id)}] Идем в соседа: ${getToken(key)}`)
        const vertex = graph[key]
        go(vertex, startVertex, 1, path)
    })

    return paths
}

function printPath(path: string[]) {
    return path.map(id => {
        return tokens.find(token => token.address === id)?.label
    })
}

function getToken(address: string) {
    return tokens.find(token => token.address === address)?.label
}

export function printResult(result: CalculateResult[]) {
    const time = new Date()
    let str = ''
    result.forEach(path => {
        str += `[${time.toLocaleTimeString()}] ${printPath(path.path).join(' - ')}, cost: ${path.profit}\n`
    })
    return str
}