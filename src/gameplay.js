import { thisExpression } from "@babel/types";
import { troll } from "./troll";
import { player } from "./player";

export class gameplay {

    constructor() {
        this.newPlayer = new player();
    }

    rollDice(sides) {
        return Math.floor(Math.random() * (sides - 1 + 1)) + 1;
    }

    fight() {
        let newTroll = new troll(player.level, player.life / 7);
        let trollRoll = this.rollDice(newTroll.level);
        let playerRoll = this.rollDice(this.newPlayer.level);

        if(trollRoll > playerRoll) {
            
        }

    }

}