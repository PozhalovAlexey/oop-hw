import {Character} from "./Character.js";

class Magician extends Character {
    constructor(name, type, attack, defence) {
        super(name, type, attack, defence)
        this.type = type
        this.attack = attack;
        this.defence = defence;
    }
}

const mag = new Magician('Mag', 'Magician',  10, 40);

