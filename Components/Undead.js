import {Character} from "./Character.js";

class Undead extends Character {
    constructor(name, type) {
        super(name, type)
        this.type = type
        this.attack = 25;
        this.defence = 25;
    }
}

const undead = new Undead('Undead', 'Undead');

