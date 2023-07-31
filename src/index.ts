import Human from './ts-modules/generics';

function sum(a: number, b: number): number {
  return a + b;
}

const res1 = sum(2, 4);
const res2 = sum(5, -3);
//const res3 = sum(true, 'abc');

const person1: Human = new Human('Ethan', 54, 'miner');
console.log(person1);
