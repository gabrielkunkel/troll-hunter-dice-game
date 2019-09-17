export class troll {

    constructor (life, level) {
        this.life = life;
        this.level = level;

        this.loseLife = this.loseLife.bind(this);
    }

    loseLife(amount) {
        this.life = this.life - amount;
    }

}