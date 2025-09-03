// Abstração: Produto -> aumento, desconto
// camiseta = Cor, caneca = Material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); //linka o __proto__ ao camiseta
Camiseta.prototype.constructor = Camiseta; // altera o __proto__: constructor de volta ao Camiseta (puxa o Produto da linha de cima)
Camiseta.prototype.aumento = function (porcentual) {
  // altearndo o metodo .preco setado antes no codigo
  this.preco = this.preco + this.preco * (porcentual / 100);
};

const camiseta = new Camiseta("Regata", 8, "Preta");
camiseta.aumento(10);
console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: () => estoque,
    set: (valor) => {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.validaMaterial = function (material) {
  this.material !== material ? console.log("Material Indisponivel") : console.log("Material Disponivel");
};
Caneca.prototype.validaEstoque = function () {
  this.estoque <= 0
    ? console.log("Estoque Zerado")
    : this.estoque <= 3
    ? console.log("Estoque de risco")
    : console.log("Estoque Ok");
};

const caneca = new Caneca("Xicara", 10, "Vidro", 0);
caneca.validaMaterial("Vidro");
caneca.validaEstoque();
console.log(caneca);
