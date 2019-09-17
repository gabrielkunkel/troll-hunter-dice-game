import { player } from "./player";
import { monsterDatabase } from "./monsterDatabase";

export class gameplay {

    constructor() {
        this.newPlayer = new player();
        this.newTroll = {};
        this.trolls = [];
        this.chosenTroll = {};
        this.monsterDatabase = monsterDatabase;

        this.generateNewTroll = this.generateNewTroll.bind(this);
        this.fight = this.fight.bind(this);
        this.rollDice = this.rollDice.bind(this);
        this.generateInitialTrolls = this.generateInitialTrolls.bind(this);

        this.generateInitialTrolls();
    }

    generateNewTroll(monsterId) {
        let whichTroll = this.rollDice(this.monsterDatabase.length) - 1;
        let trollToId = this.monsterDatabase[whichTroll];
        Object.assign(trollToId, { id: monsterId});
        this.trolls[monsterId] = trollToId;
        console.log(this.trolls[monsterId]);
        this.forceUpdate();
    }

    generateInitialTrolls() {
        for (let i = 0; i < this.monsterDatabase.length; i += 1) {
            let whichTroll = this.rollDice(this.monsterDatabase.length) - 1;
            let trollToId = this.monsterDatabase[whichTroll];
            this.trolls.push(trollToId);
        }

        this.trolls = this.trolls.map((monster, index) => {
            // Object.assign would be more terse
            return {
                id: index,
                name: monster.name,
                level: monster.level,
                life: monster.life,
                img: monster.img
            }
        });
    
        console.log(this.trolls);

    }

    rollDice(sides) {
        return Math.floor(Math.random() * (sides - 1 + 1)) + 1;
    }

    fight(monsterId) {
        console.log(this.newPlayer);
        console.log(this.trolls[monsterId]);
        let trollRoll = this.rollDice(this.trolls[monsterId].level);
        let playerRoll = this.rollDice(this.newPlayer.level);
        if (trollRoll > playerRoll) {
            this.newPlayer.life = this.newPlayer.life - (trollRoll - playerRoll);
            console.log("You lost that fight.");
        } else if (trollRoll < playerRoll) {
            this.trolls[monsterId].life = this.trolls[monsterId].life - (playerRoll - trollRoll);
            console.log("You won that fight.");
        }

        if (this.trolls[monsterId].life < 1) {
            console.log("You killed the monster. Level up!");
            this.newPlayer.raiseLevel();
            this.generateNewTroll(monsterId);
        }

        if (this.newPlayer.level === 8) {
            console.log("You won.")
        }

        if (this.newPlayer.life < 1) {
            console.log('You died. You\'re a loser')
        }

    }

}