import { bridge, indocoin, purr, qube, soon, usdt, wbtc, wever } from './config'
import type { Pair } from '../../../config/types.config'

export const qubeWever: Pair = {
    tokenA: qube,
    tokenB: wever,
    address: '0:c8021e99e5329cd863ed206e2729be28586dc2ab398ed4d5f2bbddf2f44d8b01'
}

export const weverBridge: Pair = {
    tokenA: wever,
    tokenB: bridge,
    address: '0:83b88abbcd562c8d8dc4cab30ec1ded86a4ded99000ca02425715e5cec754f06'
}

export const weverUsdt: Pair = {
    tokenA: wever,
    tokenB: usdt,
    address: '0:771e3d124c7a824d341484718fcf1af03dd4ba1baf280adeb0663bb030ce2bf9'
}

export const qubeBridge: Pair = {
    tokenA: qube,
    tokenB: bridge,
    address: '0:8be972dfd026769d3904d64a3cd929f6e1c7f6b79af6c3bebe320ade5c0b7e82'
}

export const wbtcWever: Pair = {
    tokenA: wbtc,
    tokenB: wever,
    address: '0:ff0cc18a9e2bb4f7121e4a878d8721618b26070c96888e6849768d1dd7b99c21'
}

export const wbtcBridge: Pair = {
    tokenA: wbtc,
    tokenB: bridge,
    address: '0:ab39f6f37b9eb96f187199ff7f88745efe99bfa7624691f9f7d1e7713b6bc478'
}

export const soonWever: Pair = {
    tokenA: soon,
    tokenB: wever,
    address: '0:71e089d71ed9a03567fb2ae561e67638f448126665eda9bdb19aa3750088732f'
}

export const soonUsdt: Pair = {
    tokenA: soon,
    tokenB: usdt,
    address: '0:a4aed4d993eec39b85608775f63474627cbd5771aa7d9f650d04d8806af15de7'
}

export const purrWever: Pair = {
    tokenA: purr,
    tokenB: wever,
    address: '0:d02d513c71efe7cc2d44ad515e4648aa10306a0e91b6a601ba2e3b9f2ce0b431'
}

export const purrQube: Pair = {
    tokenA: purr,
    tokenB: qube,
    address: '0:57de338b99ff8ad8f1dabd75ddb920beb913a5328b8208b91f4b7047fe5874b6'
}

export const indocoinWever: Pair = {
    tokenA: indocoin,
    tokenB: wever,
    address: '0:2710c6d4437ca37d5ac4d806940ed42076447239738f7a9c831ef1f7ef21e7af'
}

export const indocoinUsdt: Pair = {
    tokenA: indocoin,
    tokenB: usdt,
    address: '0:1a243a8b8274059bd8f848f70ca6f87b264e7a570476fe940bf3274ded9ffe7d'
}

export const pairs = [
    qubeWever,
    qubeBridge,
    weverBridge,
    weverUsdt,
    wbtcWever,
    wbtcBridge,
    soonWever,
    soonUsdt,
    purrWever,
    purrQube,
    indocoinWever,
    indocoinUsdt
]