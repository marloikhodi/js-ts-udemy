//classes seriam no geral a mesma coisa que uma funcção construtora!
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  //diferente do constructor, nao tem a necessidade de atribuir ao prototype
  falar() {
    console.log(`${this.nome} está falando`);
  }
  comer() {
    console.log(`${this.nome} está comendo`);
  }
  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

const p1 = new Pessoa("marlo", "santos"); //nao se pode esquecer no "new" se tratando de class
console.log(p1);
