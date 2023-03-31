import { signerKeys, TonClient } from '@eversdk/core'
import { libNode } from '@eversdk/lib-node'

TonClient.useBinaryLibrary(libNode)

export const client = new TonClient({
    network: {
        endpoints: ['https://mainnet.evercloud.dev/89a3b8f46a484f2ea3bdd364ddaee3a3/graphql']
    }
})

export const signer = signerKeys({
    'public': '2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16',
    'secret': '172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3'
})