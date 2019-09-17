import { troll } from "./troll";
import { player } from "./player";

export class gameplay {

    constructor() {
        this.newPlayer = new player();
        this.newTroll = {};

        this.gameLoop = this.gameLoop.bind(this);
        this.generateNewTroll = this.generateNewTroll.bind(this);
        this.fight = this.fight.bind(this);
        this.rollDice = this.rollDice.bind(this);
        
        this.generateNewTroll(9, this.newPlayer.level+2);
    }

    gameLoop() {
        const successLevel = 8;

        while (this.newPlayer.life > 0 && this.newPlayer.level < successLevel) {
            this.fight();
            if(this.newTroll.life < 1) {
                this.newPlayer.raiseLevel();
                this.generateNewTroll(9, this.newPlayer.level+3);
            }
            console.log('player ', this.newPlayer);
            console.log('troll ', this.newTroll);

        }

        console.log("Game Over")
        if (this.newPlayer.level === successLevel) { console.log("You won.")}
        else { console.log('You\'re a loser') }
    }

    generateNewTroll(life, level) {
        this.newTroll = new troll(life, level);
    }

    rollDice(sides) {
        return Math.floor(Math.random() * (sides - 1 + 1)) + 1;
    }

    fight() {
        let trollRoll = this.rollDice(this.newTroll.level);
        let playerRoll = this.rollDice(this.newPlayer.level);
        console.log('trollRoll: ', trollRoll, 'playerRoll: ', playerRoll);
        if (trollRoll > playerRoll) {
            this.newPlayer.life = this.newPlayer.life - (trollRoll - playerRoll);
        } else if (trollRoll < playerRoll) {
            this.newTroll.life = this.newTroll.life - (playerRoll - trollRoll);
        }
    }

}