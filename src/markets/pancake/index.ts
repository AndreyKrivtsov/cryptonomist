import { PancakeDex } from './PancakeDex'
import { Tokens } from './Tokens'
import { Pairs } from './Pairs'

const pancakeTokens = new Tokens()
const pancakePairs = new Pairs()
export const pancakeDex = new PancakeDex(pancakePairs, pancakeTokens)