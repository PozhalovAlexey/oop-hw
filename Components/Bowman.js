import {Character} from "./Character.js";

class Bowman extends Character {
    constructor(name, type) {
        super(name, type)
        this.type = type
        this.attack = 25;
        this.defence = 25;
    }
}

const bowman = new Bowman('Bowman', 'Bowman');

