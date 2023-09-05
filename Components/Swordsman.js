import {Character} from "./Character.js";

class Swordsman extends Character {
    constructor(name, type, attack, defence) {
        super(name, type, attack, defence)
        this.type = type
        this.attack = attack;
        this.defence = defence;
    }
}

const swordsman = new Swordsman('Swordsman', 'Swordsman',  40, 10);

