export default class Person {
  private _name: string;
  private _birthDate: Date;
  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }
  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this._birthDate = value;
  }

  validateName(name: string): void {
    if(name.length < 3) {
      throw new Error(`O nome deve conter no mínimo 3 caracteres`);
    }
  }
}