 class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        if (this.name.length > 10 && this.name.length < 2) {
            throw new Error('Не правильно передано имя!')
        }
        this.type = type;
        if (typeof this.type !== "string") {
            throw new Error('Передали не строку')
        }
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (!this.health) {
            return
        }
        this.level++;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100)
        }
    }
}



module.exports = {Character}


