class Superclass {
  constructor(public isSuper: boolean = true) {}
  
  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor () {
    super();
    this.isSuper = false
  }
}

const myfunc = (object: Superclass) => {
  // object.sayHello()
  if (object.isSuper === true) {
    console.log('Super!')
  }
  if (object.isSuper === false) {
    console.log('Sub')
  }
}

const objSuperclass = new Superclass();
const objSubclass = new Subclass();

myfunc(objSuperclass);
myfunc(objSubclass);