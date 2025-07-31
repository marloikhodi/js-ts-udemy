//Factory Function
//Constructor Function

function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        //getter
        get nomeCompleto() { return `${this.nome} ${this.sobrenome}` },
        //setter
        set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
        },
        fala(assunto) { //fala: function(assunto){
            return `${nome} está ${assunto} ` //o this seria quem chama a funçao, nesse caso sendo o p1
        },
        peso,
        altura,
        get imc() {
            imcFinal = this.peso / (this.altura ** 2)
            return imcFinal.toFixed(2)
        }
    }
}

const p1 = criaPessoa('marlo', 'santo', 80, 1.20)
console.log(p1,p1.fala("conversando"),p1.imc,p1.nomeCompleto)
p1.nomeCompleto = "maria oliveira silva"
console.log(p1.nomeCompleto)

