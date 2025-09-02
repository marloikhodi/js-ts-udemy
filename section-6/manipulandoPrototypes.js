//um obj literal é a mesma coisa de ter um new Object (funçao construtora) que possui um Object.prototype

const objA = {
  chaveA: "A",
  //__proto__ === Object.prototype
};

const objB = {
  chaveB: "B",
  //__proto__ === objA
};

const objC = new Object();
objC.chaveC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objC.chaveB);
