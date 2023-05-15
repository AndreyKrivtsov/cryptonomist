import { ArbGraph } from './ArbGraph'
import { pairs, prices, tokenA, tokenB, tokenC } from '../../faker'

describe('ArbGraph', () => {
    const arb = new ArbGraph(pairs)

    test('has pairs', () => {
        expect(arb.pairs).toHaveLength(pairs.length)
    });

    test('has true graph', () => {
        expect(arb.graph()).toHaveProperty(tokenA.address)
        expect(arb.graph()).toHaveProperty(tokenB.address)
        expect(arb.graph()).toHaveProperty(tokenC.address)
    });

    test('can calculate', () => {
        const result = arb.calculate(prices)
        if (!result) return
        expect(result).toHaveLength(6)
        expect(result[0].profit).toBe(1.1)
        expect(result[2].profit).toBe(0.9090909090909091)
    });
});