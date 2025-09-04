function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log("Saldo Insuficiente:");
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(`Ag/C: ${this.agencia}/${this.conta}
Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log("Saldo Insuficiente:");
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(11, 22, 0);
contaPoupanca.depositar(10);
contaPoupanca.sacar(110);
contaPoupanca.sacar(10);

console.log("----------------");
const contaCorrente = new ContaCorrente(11, 22, 0, 1000);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(10);
