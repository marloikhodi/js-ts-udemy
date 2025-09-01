// entendimento de POO dentro do JS

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
// cadeia de busca = pessoa1 -> Pessoa.prototype -> Object.prototype
Pessoa.prototype.fullName = function () {
  // () => this.nome + this.sobrenome; arrow function nao puxa o this.
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Marlon", "Santos");

console.log(pessoa1);
console.log(pessoa1.fullName());
