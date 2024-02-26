class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = Array();
  private _assignmentsGrades: number[] = Array();

  constructor(enrollment: string, name: string, exames: number[], grades: number[]){
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = exames;
    this.assignmentsGrades = grades;
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
    if(param.length !== 4) {
      throw new Error('A pessoa estudante tem que possuir 4 notas de provas.');
    }
    this._examsGrades = param;
  }
  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  public set assignmentsGrades(param: number[]) {
    this._assignmentsGrades = param;
    if(param.length !== 2) {
      throw new Error (
        'A pessooa estudante tem que possuir 2 notas de trabalhos.'
      )
    }
    this._assignmentsGrades = param;
  }

  sumGrades(): number {
    const newArray = [...this._examsGrades, ...this._assignmentsGrades]
    return newArray.reduce((previousNote, note) => {
      const nextNote = note + previousNote;
      return nextNote;
    })
  }

  sumAverageGrade(): number {
    const divider = [...this._examsGrades, ...this._assignmentsGrades]
    return this.sumGrades() / divider.length;
  }
}

const personOne = new Student('202001011', 'Maria da Silva', [1, 2, 3, 4], [1, 2]);

console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva', [1, 2, 3, 4], [1, 2]);

console.log(personTwo);