interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger{
  log(param: string): void {
    console.log(param)
  }
}

class ConsoleLogger2 implements Logger{
  log(param: string): void {
    console.log('log2', param)
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}
  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }

}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
// console.log(logger1)
// console.log(logger2)

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();
// console.log(database1)
// console.log(database2)
// console.log(database3)

database1.save('1', '1');
database2.save('2', '2');
database3.save('3', '3');

// console.log(database1)
// console.log(database2)
// console.log(database3)