import {Character} from "./Character.js";

class Zombie extends Character {
    constructor(name, type, attack, defence) {
        super(name, type, attack, defence)
        this.type = type
        this.attack = attack;
        this.defence = defence;
    }
}

const zombie = new Zombie('Zombie', 'Zombie',  40, 10);

