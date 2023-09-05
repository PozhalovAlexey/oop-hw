import {Character} from "./Character.js";

class Bowman extends Character {
    constructor(name, type, attack, defence) {
        super(name, type, attack, defence)
        this.type = type
        this.attack = attack;
        this.defence = defence;
    }
}

const bowman = new Bowman('Bowman', 'Bowman',  25, 25);

