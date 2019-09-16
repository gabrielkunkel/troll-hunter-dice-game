import { troll } from "./troll";

describe('troll class', () => {
    
    it('has life and level', () => {
        let newTroll = new troll(10, 10);
        expect(newTroll.life).toEqual(10);
        expect(newTroll.level).toEqual(10);
    });

});