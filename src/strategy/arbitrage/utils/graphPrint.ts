import { Nodes } from './../Graph'
import { tokens } from '../../../markets/flatQube/config/tokens.config'

export function graphPrint(graph: Nodes) {
    let result = ''
    console.log('\nGraph print:')
    Object.keys(graph).forEach((key, index) => {
        const edges = graph[key].edges
        const token = tokens.find(token => token.address === graph[key].id)

        let edgesText = ''
        Object.keys(edges).forEach((edgeKey, edgeIndex) => {
            const tokenEdge = tokens.find(token => token.address === graph[edgeKey].id)
            const edgeName = `${tokenEdge?.label}: ${edges[edgeKey].weight}`
            edgeIndex > 0 ? edgesText += '\n' : null
            edgesText += `  ${edgeName}`
        })

        const text =
            `${token?.label}: {
${edgesText}
}`
        index > 0 ? result += '\n' : null
        result += text
    })
    return result + '\n'
}