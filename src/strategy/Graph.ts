export type Nodes = {
    [key: string]: Node
}

type Edges = {
    [key: string]: Edge
}

export type Node = {
    id: string
    edges: Edges
}

export type Edge = {
    id: string
    weight: number
}

export class Graph {
    private graph: Nodes = {}

    getGraph() {
        return this.graph
    }

    getNode(id: string): Node | null {
        if (id in this.graph) {
            return this.graph[id]
        }
        return null
    }

    setNode(node: Node): boolean {
        if (!this.getNode(node.id)) {
            this.graph[node.id] = node
            return true
        }
        return false
    }

    getEdge(nodeId: string, edgeAddress: string): Edge | null {
        if (nodeId in this.graph) {
            const node = this.graph[nodeId]
            if (edgeAddress in node.edges) {
                return node.edges[edgeAddress]            }
        }
        return null
    }

    setEdge(nodeId: string, edge: Edge): boolean {
        if (nodeId in this.graph) {
            const node = this.graph[nodeId]
            if (!(edge.id in node.edges)) {
                node.edges[edge.id] = edge
                return true
            }
        }
        return false
    }
}