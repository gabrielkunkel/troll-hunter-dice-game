
export class gameplay {

    constructor() {
    }

    rollDice(sides) {
        return Math.floor(Math.random() * (sides - 1 + 1)) + 1;
        //return Math.floor(Math.random() * (max - min + 1)) + min
    }


}