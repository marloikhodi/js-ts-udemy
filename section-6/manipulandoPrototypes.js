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

// console.log(objB.chaveA);
// console.log(objC.chaveB);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (porcentual) {
  this.preco = this.preco - this.preco * (porcentual / 100);
};

Produto.prototype.aumento = function (porcentual) {
  this.preco = this.preco + this.preco * (porcentual / 100);
};

const p1 = new Produto("Camisa", 50);
p1.aumento(100);
// console.log("preço aumentado em 100%:", p1.preco);

const p2 = {
  nome: "Caneca",
  preco: 100,
};

Object.setPrototypeOf(p2, p1); //necessario informar a função e nao sua construtora

p2.aumento(100);
// console.log("preço aumentado em 100%:", p2.preco);

const p3 = Object.create(Produto.prototype, {
  preco: {
    //informanado os valores por aqui, possui a necessidade de serem obj
    writable: true,
    enumerable: true,
    configurable: true,
    value: 110,
  },
  tamanho: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: "M",
  },
});

p3.nome = "Calça"; //posso informar os valores dessa maneira
p3.aumento(10);
console.log(p3);
