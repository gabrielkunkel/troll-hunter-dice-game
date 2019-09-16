import {player} from './player';

describe('player class', () => {
    
    describe('a new player', () => {
        
        it('starts with life', () => {
            let newPlayer = new player();
            expect(typeof newPlayer.life).toEqual('number');
            expect(newPlayer.life).toBeGreaterThan(0);
        });

        it('starts with level 4', () => {
            let newPlayer = new player();
            expect(typeof newPlayer.level).toEqual('number');
            expect(newPlayer.level).toBe(4);
        });

    });

    describe('raise player level', () => {
        


    });

    describe('reduce player life', () => {
        
        

    });


});