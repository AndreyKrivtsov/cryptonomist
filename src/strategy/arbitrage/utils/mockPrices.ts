const tokens = {
    wever: {
        label: 'wever',
        address: '0:a49cd4e158a9a15555e624759e2e4e766d22600b7800d891e46f9291f044a93d',
        decimal: 9
    },
    qube: {
        label: 'qube',
        address: '0:9f20666ce123602fd7a995508aeaa0ece4f92133503c0dfbd609b3239f3901e2',
        decimal: 9
    },
    bridge: {
        label: 'bridge',
        address: '0:f2679d80b682974e065e03bf42bbee285ce7c587eb153b41d761ebfd954c45e1',
        decimal: 9
    },
    wbtc: {
        label: 'wbtc',
        address: '0:2ba32b75870d572e255809b7b423f30f36dd5dea075bd5f026863fceb81f2bcf',
        decimal: 8
    }
}

export const mockPrices = [
    {
        pair: {
            tokenA: tokens.qube,
            tokenB: tokens.wever,
            address: '0:c8021e99e5329cd863ed206e2729be28586dc2ab398ed4d5f2bbddf2f44d8b01'
        },
        price: 20.65050289
    },
    {
        pair: {
            tokenA: tokens.qube,
            tokenB: tokens.bridge,
            address: '0:8be972dfd026769d3904d64a3cd929f6e1c7f6b79af6c3bebe320ade5c0b7e82'
        },
        price: 1.258953744
    },
    {
        pair: {
            tokenA: tokens.wever,
            tokenB: tokens.bridge,
            address: '0:83b88abbcd562c8d8dc4cab30ec1ded86a4ded99000ca02425715e5cec754f06'
        },
        price: 0.060818005
    },
    {
        pair: {
            tokenA: tokens.wbtc,
            tokenB: tokens.wever,
            address: '0:ff0cc18a9e2bb4f7121e4a878d8721618b26070c96888e6849768d1dd7b99c21'
        },
        price: 337353.68446099
    },
    {
        pair: {
            tokenA: tokens.wbtc,
            tokenB: tokens.bridge,
            address: '0:ab39f6f37b9eb96f187199ff7f88745efe99bfa7624691f9f7d1e7713b6bc478'
        },
        price: 19980.308141055
    }
]