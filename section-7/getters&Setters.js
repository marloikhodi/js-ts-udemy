const _velocidade = Symbol("Velocidade");
// utilizando o Symbol() para criar uma variavel privada
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade() {
    // esse seria um getter
    return this[_velocidade];
  }

  set velocidade(val) {
    // esse seria um setter
    if (typeof val !== "number") return;
    if (val > 5 || val < 0) return;
    this[_velocidade] = val;
  }

  // ambos não são funções, vira um atributo

  acelerar() {
    if (this[_velocidade] >= 5) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const carro1 = new Carro("Relampago Mcqueen");
// console.log(carro1);

// for (let i = 0; i <= 20; i++) {
//   carro1.acelerar();
// }

// console.log(carro1);

// for (let i = 0; i <= 20; i++) {
//   carro1.freiar();
// }

carro1.velocidade = 6;
console.log(carro1.velocidade);
// console.log(carro1);
