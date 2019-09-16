import { gameplay } from './gameplay';

describe('gameplay module', () => {
    
    describe('rollDice', () => {

        it('returns a number', () => {
            let game = new gameplay();
            expect(typeof game.rollDice(4)).toEqual('number');
        });

        it('calls Math.random', () => {
            let MathRandom = Math.random;
            Math.random = jest.fn();
            let game = new gameplay();
            game.rollDice(4);
            expect(Math.random).toHaveBeenCalledTimes(1);
            Math.random = MathRandom;
        });

        it('returns a random result within range of die sides', () => {
            let game = new gameplay();
            expect(game.rollDice(4)).toBeGreaterThanOrEqual(1);
            expect(game.rollDice(4)).toBeLessThanOrEqual(4);
        });

        it('always returns 1 for 1', () => {
            let game = new gameplay();
            expect(game.rollDice(1)).toBe(1);
        });

    });

});