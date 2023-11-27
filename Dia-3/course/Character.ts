abstract class Character {
  abstract talk(): void;
  abstract specialMove():void;
  
  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk () {
    console.log(`Hi, I'm ${this._name}. I attack at close range.`)
  }

  specialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName}!`)
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void {
    console.log(`Hi, I'm ${this._name}. I can attack from a long range.`);
  }

  specialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName}!`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super Dragon');
const Samus = new LongRangeCharacter('Samus', 'Zero Laser');

Character.characterPresentation(yoshi);
Character.characterPresentation(Samus);