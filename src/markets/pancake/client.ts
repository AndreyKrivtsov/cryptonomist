import { ethers } from 'ethers'

const url = 'https://bsc-dataseed2.binance.org'
export const provider = new ethers.JsonRpcProvider(url, { name: "BNB", chainId: 56 })
