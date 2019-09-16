import { thisExpression } from "@babel/types";

export class gameplay {

    constructor() {

    }

    rollDice(sides) {
        return Math.floor(Math.random() * (sides - 1 + 1)) + 1;
    }

}