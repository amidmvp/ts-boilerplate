export default class Human {
  private name: string;
  private age: number;
  private job: string;

  constructor(name: string, age: number, job: string) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  // Дополнительные методы и свойства класса

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getJob(): string {
    return this.job;
  }
}
