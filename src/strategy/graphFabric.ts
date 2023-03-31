import { Quote } from '../config/types.config'
import { Graph } from './Graph'

export function graphFabric(quotes: Quote[]) {
    const tokenGraph = new Graph()
    quotes.forEach(quote => {
        const tokenA = quote.pair.tokenA
        const tokenB = quote.pair.tokenB
        const newEdge = {
            id: tokenB.address,
            weight: quote.price
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
            weight: 1 / quote.price
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