import { FlatQubeDex } from './FlatQubeDex'
import { Tokens } from './Tokens'
import { Pairs } from './Pairs'

const flatQubeTokens = new Tokens()
const flatQubePairs = new Pairs()
export const flatQubeDex = new FlatQubeDex(flatQubePairs, flatQubeTokens)