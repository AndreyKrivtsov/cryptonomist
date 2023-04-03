import { ada, babyDoge, busd, cake, eth, usdt, wbnb, xrp } from './config'
import type { Pair } from '../../../config/types'

export const usdtWbnb: Pair = {
    tokenA: usdt,
    tokenB: wbnb,
    address: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE'
}

export const wbnbBusd: Pair = {
    tokenA: wbnb,
    tokenB: busd,
    address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16'
}

export const usdtBusd: Pair = {
    tokenA: usdt,
    tokenB: busd,
    address: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00'
}

export const cakeWbnb: Pair = {
    tokenA: cake,
    tokenB: wbnb,
    address: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0'
}

export const cakeBusd: Pair = {
    tokenA: cake,
    tokenB: busd,
    address: '0x804678fa97d91B974ec2af3c843270886528a9E6'
}

export const cakeUsdt: Pair = {
    tokenA: cake,
    tokenB: usdt,
    address: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b'
}

export const ethWbnb: Pair = {
    tokenA: eth,
    tokenB: wbnb,
    address: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc'
}

export const ethUsdt: Pair = {
    tokenA: eth,
    tokenB: usdt,
    address: '0x531FEbfeb9a61D948c384ACFBe6dCc51057AEa7e'
}

export const wbnbBabydog: Pair = {
    tokenA: wbnb,
    tokenB: babyDoge,
    address: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b'
}

export const usdtBabydog: Pair = {
    tokenA: usdt,
    tokenB: babyDoge,
    address: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b'
}

export const xrpWbnb: Pair = {
    tokenA: xrp,
    tokenB: wbnb,
    address: '0x03F18135c44C64ebFdCBad8297fe5bDafdBbdd86'
}

export const adaWnbn: Pair = {
    tokenA: ada,
    tokenB: wbnb,
    address: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F'
}

export const xrpAda: Pair = {
    tokenA: xrp,
    tokenB: ada,
    address: '0xdba7342bEe376De904d24A2cD92541C8DFAc9936'
}

export const pairs = [
    usdtWbnb,
    wbnbBusd,
    usdtBusd,
    cakeWbnb,
    cakeBusd,
    cakeUsdt,
    ethWbnb,
    ethUsdt,
    wbnbBabydog,
    usdtBabydog,
    xrpWbnb,
    adaWnbn,
    xrpAda
]