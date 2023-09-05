import {Character} from "./Character.js";

class Magician extends Character {
    constructor(name, type) {
        super(name, type)
        this.type = type
        this.attack = 10;
        this.defence = 40;
    }
}

const mag = new Magician('Mag', 'Magician');

