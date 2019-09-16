export class troll {

    constructor (life, level) {
        this.life = life;
        this.level = level;
    }

    loseLife(amount) {
        this.life = this.life - amount;
    }

}