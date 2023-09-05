import {Character} from "./Character.js";

class Undead extends Character {
    constructor(name, type, attack, defence) {
        super(name, type, attack, defence)
        this.type = type
        this.attack = attack;
        this.defence = defence;
    }
}

const undead = new Undead('Undead', 'Undead',  25, 25);

