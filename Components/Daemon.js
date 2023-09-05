import {Character} from "./Character.js";

class Daemon extends Character {
    constructor(name, type) {
        super(name, type)
        this.type = type
        this.attack = 10;
        this.defence = 40;
    }
}

const demon = new Daemon('Daemon', 'Daemon');

