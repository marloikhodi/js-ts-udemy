//705.484.450-52

class validaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  valida() {
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.sequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = validaCPF.criaDigito(cpfParcial);
    const digito2 = validaCPF.criaDigito(cpfParcial + digito1);

    const novoCPf = cpfParcial + digito1 + digito2;
    return novoCPf === this.cpfLimpo;
  }

  static criaDigito(cpfParcial) {
    //como nao utiliza nada do this pode se tornar um metodo estatico sendo chamado por validaCPF.criaDigito
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  sequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }
}

const cpf = new validaCPF("705.484.450-52");
console.log(cpf.valida());
