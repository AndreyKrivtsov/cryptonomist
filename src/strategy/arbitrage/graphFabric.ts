import { PairPrice } from '../../config/types'
import { Graph } from './Graph'

export function graphFabric(prices: PairPrice[]) {
    const tokenGraph = new Graph()
    prices.forEach(price => {
        const tokenA = price.pair.tokenA
        const tokenB = price.pair.tokenB
        const newEdge = {
            id: tokenB.address,
            weight: price.price
        }

        if (!tokenGraph.getNode(tokenA.address)) {
            const node = {
                id: tokenA.address,
                edges: {}
            }
            tokenGraph.setNode(node)
            tokenGraph.setEdge(tokenA.address, newEdge)
        } else {
            if (!tokenGraph.getEdge(tokenA.address, tokenB.address)) {
                tokenGraph.setEdge(tokenA.address, newEdge)
            }
        }

        const reverseNewEdge = {
            id: tokenA.address,
            weight: 1 / price.price
        }

        if (!tokenGraph.getNode(tokenB.address)) {
            const node = {
                id: tokenB.address,
                edges: {}
            }
            tokenGraph.setNode(node)
            tokenGraph.setEdge(tokenB.address, reverseNewEdge)
        } else {
            if (!tokenGraph.getEdge(tokenB.address, tokenA.address)) {
                tokenGraph.setEdge(tokenB.address, reverseNewEdge)
            }
        }
    })
    return tokenGraph
}