
export class player {

    constructor () {
        this.life = 100;
        this.level = 4;
    }

    raiseLevel() {
        this.level +=1;
    }

    reduceLife(damage) {
        this.life = this.life - damage;
    }


}