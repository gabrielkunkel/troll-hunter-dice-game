import { troll } from "./troll";
import { player } from "./player";

export class gameplay {

    constructor() {
        this.newPlayer = new player();
        this.newTroll = new troll(this.newPlayer.life / 7, this.newPlayer.level);
        this.name = "Bobby";

        this.gameLoop = this.gameLoop.bind(this);
        this.generateNewTroll = this.generateNewTroll(this);
        this.fight = this.fight.bind(this);
        this.rollDice = this.rollDice.bind(this);
    }

    gameLoop() {

        console.log("game loop started");
        console.log(this.newPlayer);
        let i = 0;

        while (this.newPlayer.life > 0 && this.newPlayer.level < 5 && i < 10) {
            this.fight();
            if(this.newTroll.life < 1) {
                this.newPlayer.raiseLevel();
                this.generateNewTroll();
            }
            console.log(this.newPlayer);

            i +=1;
        }
        console.log("game over");
    }

    generateNewTroll() {
        this.newTroll = new troll(this.newPlayer.level, this.newPlayer.life / 7);
    }

    rollDice(sides) {
        return Math.floor(Math.random() * (sides - 1 + 1)) + 1;
    }

    fight() {
        let trollRoll = this.rollDice(this.newTroll.level);
        let playerRoll = this.rollDice(this.newPlayer.level);
        return playerRoll - trollRoll;
    }

}