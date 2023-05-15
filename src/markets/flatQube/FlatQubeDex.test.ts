import { FlatQubeDex } from './FlatQubeDex'
import { Pairs } from './Pairs'
import { Tokens } from './Tokens'

describe('FlatQube Dex', () => {
    const pairs = new Pairs()
    const tokens = new Tokens()
    const dex = new FlatQubeDex(pairs, tokens)
    test('has pairs and tokens', () => {
        expect(dex.tokensList()).toHaveLength(tokens.list().length)
        expect(dex.pairsList()).toHaveLength(pairs.list().length)
    });
});