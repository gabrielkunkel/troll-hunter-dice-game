
export class player {

    constructor () {
        this.life = 100;
        this.level = 4;

        this.raiseLevel = this.raiseLevel.bind(this);
        this.reduceLife = this.reduceLife.bind(this);
    }

    raiseLevel() {
        this.level +=1;
    }

    reduceLife(damage) {
        this.life = this.life - damage;
    }


}