import {player} from './player';

describe('player class', () => {
    
    describe('a new player', () => {
        
        it('starts with life', () => {
            let newPlayer = new player();
            expect(typeof newPlayer.life).toEqual('number');
        });

    });


});