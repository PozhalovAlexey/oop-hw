import {Character} from "./Character.js";

class Zombie extends Character {
    constructor(name, type,) {
        super(name, type,)
        this.type = type
        this.attack = 40;
        this.defence = 10;
    }
}

const zombie = new Zombie('Zombie', 'Zombie');

