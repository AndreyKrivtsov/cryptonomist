import { Pair, PairPrice } from '../../config/types'
import { Graph, Nodes, Node } from './utils/Graph'

export type CalculateResult = {
    path: string[],
    profit: number
}

export class Arbitrage {
    pairs: Pair[]
    _paths: string[][]
    _graph: Nodes

    constructor(pairs: Pair[]) {
        this.pairs = pairs
        this._graph = this.getGraph(pairs)
        this._paths = this.dfs(this._graph, this._graph[Object.keys(this._graph)[1]])
    }

    paths() {
        return this._paths
    }

    graph() {
        return this._graph
    }

    getGraph(pairs: Pair[]) {
        const graph = new Graph()
        const tokensGraph = this.fillGraph(graph, pairs)
        return tokensGraph.getGraph()
    }

    calculate(prices: PairPrice[]) {
        const result: CalculateResult[] = []
        let error = false
        this.paths().forEach((path) => {
            const calculateResult = {
                path: path,
                profit: 0
            }
            let cost = 1

            path.forEach((nodeFirstId, index, array) => {
                const nodeFirst = this.graph()[nodeFirstId]
                const nodeSecond = this.graph()[array[index + 1]]

                if (nodeSecond) {
                    const costResult = this.getCost(prices, nodeFirst, nodeSecond)
                    if (costResult) {
                        cost *= costResult
                    } else {
                        error = true
                        console.log(new Error(`Error width calculate costs. Pair not found.`))
                    }
                }
            })
            calculateResult.profit = cost
            result.push(calculateResult)
        })

        return error? null : result
    }

    getCost(quotes: PairPrice[], nodeA: Node, nodeB: Node) {
        let pair: PairPrice | undefined
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

    fillGraph(tokenGraph: Graph, pairs: Pair[]) {
        pairs.forEach(pair => {
            const tokenAAddress = pair.tokenA.address
            const tokenBAddress = pair.tokenB.address
            const newEdge = {
                id: tokenBAddress,
                weight: 0
            }

            if (!tokenGraph.getNode(tokenAAddress)) {
                const node = {
                    id: tokenAAddress,
                    edges: {}
                }
                tokenGraph.setNode(node)
                tokenGraph.setEdge(tokenAAddress, newEdge)
            } else {
                if (!tokenGraph.getEdge(tokenAAddress, tokenBAddress)) {
                    tokenGraph.setEdge(tokenAAddress, newEdge)
                }
            }

            const reverseNewEdge = {
                id: tokenAAddress,
                weight: 0
            }

            if (!tokenGraph.getNode(tokenBAddress)) {
                const node = {
                    id: tokenBAddress,
                    edges: {}
                }
                tokenGraph.setNode(node)
                tokenGraph.setEdge(tokenBAddress, reverseNewEdge)
            } else {
                if (!tokenGraph.getEdge(tokenBAddress, tokenAAddress)) {
                    tokenGraph.setEdge(tokenBAddress, reverseNewEdge)
                }
            }
        })
        return tokenGraph
    }

    dfs(graph: Nodes, startVertex: Node) {
        const MAX_DEPTH = 10
        const startVertexNeighborsKeys = Object.keys(startVertex.edges)
        const paths: string[][] = []

        const go = (vertex: Node, prevVertex: Node, _counter: number, _path: string[] = []) => {
            const path = [..._path]
            const counter = _counter
            if (counter > MAX_DEPTH - 1) return []
            if (!path.includes(vertex.id)) {
                path.push(vertex.id)
                const neighbors = graph[vertex.id].edges
                const neighborsKeys = Object.keys(neighbors)

                neighborsKeys.forEach(neighborKey => {
                    const nextVertex = graph[neighborKey]
                    go(nextVertex, vertex, counter + 1, path)
                })
            } else {
                if (vertex.id === startVertex.id && path.length > 2) {
                    path.push(vertex.id)
                    paths.push([...path])
                }
            }
        }

        const path: string[] = []
        path.push(startVertex.id)
        startVertexNeighborsKeys.forEach(key => {
            const vertex = graph[key]
            go(vertex, startVertex, 1, path)
        })

        return paths
    }
}