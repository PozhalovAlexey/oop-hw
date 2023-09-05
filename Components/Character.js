 class Character {
    constructor(name, type) {
        if (this.name.length > 10 && this.name.length < 2) {
            throw new Error('Не правильно передано имя!')
        }
        if (typeof this.type !== "string") {
            throw new Error('Передали не строку')
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
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


