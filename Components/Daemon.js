import {Character} from "./Character.js";

class Daemon extends Character {
    constructor(name, type, attack, defence) {
        super(name, type, attack, defence)
        this.type = type
        this.attack = attack;
        this.defence = defence;
    }
}

const demon = new Daemon('Daemon', 'Daemon',  10, 40);

