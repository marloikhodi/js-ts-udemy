function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    configurable: false, //pode reconfigurar a chave (refazer o .defineProperty)
    get: () => {
      return estoquePrivado;
    },
    set: (valor) => {
      if (typeof valor !== "number") {
        console.log(`${valor} não é um número`);
        return;
      }
      estoquePrivado = valor;
    },
  });
}
const p1 = new Produto("Camisa", 20, 3);
// console.log(p1)
p1.estoque = 12;
// console.log(p1.estoque)

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}

const p2 = criaProduto("Camisa");
// console.log(p2.nome)
