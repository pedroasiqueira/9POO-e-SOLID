class students {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(enrollment: string, name: string){
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = []
  }

  get enrollment(): string{
    return this._enrollment;
  };

  set enrollment(param: string) {
    this._enrollment = param;
  }

  get name(): string{
    return this._name;
  }

  set name(param: string) {
    if(param.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.')
    }
    this._name = param;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(param: number[]) {
    if(param.length < 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._examsGrades = param;
  }
}