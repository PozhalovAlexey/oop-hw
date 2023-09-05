import {Character} from "./Character.js";

class Swordsman extends Character {
    constructor(name, type) {
        super(name, type )
        this.type = type
        this.attack = 40;
        this.defence = 10;
    }
}

const swordsman = new Swordsman('Swordsman', 'Swordsman',  40, 10);

