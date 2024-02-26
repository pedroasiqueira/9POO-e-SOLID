interface  MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }
  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`
  }
}

const objMyClass = new MyClass(23);
console.log(objMyClass.myFunc(2))