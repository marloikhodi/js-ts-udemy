//factory function
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        fala(assunto) { //fala: function(assunto){
            return `${nome} está ${assunto} ` //o this seria quem chama a funçao, nesse caso sendo o p1
        },
        peso,
        altura,
        imc() {
            imcFinal = this.peso / (this.altura ** 2)
            return imcFinal.toFixed(2)
        }
    }
}

const p1 = criaPessoa('marlo', 'santo', 80, 1.20)
console.log(p1)
console.log(p1.fala("conversando"))
console.log(p1.imc())