const Character = require('./Components/Character.js')

describe('Character', () => {
    let character;

    beforeEach(() => {
        character = new Character('John', 'warrior', 100, 1, 50, 30);
    });

    it('should create a character with specified name, type, health, level, attack, and defence', () => {
        expect(character.name).toBe('John');
        expect(character.type).toBe('warrior');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(50);
        expect(character.defence).toBe(30);
    });

    it('should throw an error if the name length is less than 2', () => {
        expect(() => {
            new Character('A', 'warrior', 100, 1, 50, 30);
        }).toThrowError('Не правильно передано имя!');
    });

    it('should throw an error if the name length is greater than 10', () => {
        expect(() => {
            new Character('TooLongName', 'warrior', 100, 1, 50, 30);
        }).toThrowError('Не правильно передано имя!');
    });

    it('should throw an error if the type is not a string', () => {
        expect(() => {
            new Character('John', 123, 100, 1, 50, 30);
        }).toThrowError('Передали не строку');
    });

    it('should increment the level, attack, defence, and set health to 100 on levelUp() if health exists', () => {
        character.levelUp();

        expect(character.level).toBe(2);
        expect(character.attack).toBe(60);
        expect(character.defence).toBe(36);
        expect(character.health).toBe(100);
    });

    it('should not modify the level, attack, defence, and health on levelUp() if health is undefined', () => {
        character.health = undefined;
        character.levelUp();

        expect(character.level).toBe(1);
        expect(character.attack).toBe(50);
        expect(character.defence).toBe(30);
        expect(character.health).toBeUndefined();
    });
});