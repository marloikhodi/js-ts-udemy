const pessoa = {
    nome: "Luiz",
    sobrenome: "Otavio"
}
chave = 'nome'

// console.log(pessoa.nome)
// console.log(pessoa["sobrenome"])
// console.log(pessoa[chave])

const pessoa1 = new Object();
pessoa1.nome = "Joao"
pessoa1.sobrenome = "Vitor"
pessoa1.idade = 30
// console.log(pessoa, pessoa1)
delete pessoa1.sobrenome //deletar chave
// console.log(pessoa)
pessoa1.falarNome = function () {
    return (`${this.nome}, tudo bom?`)
}
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
// console.log(pessoa1.falarNome())
// console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1) {
    // console.log(pessoa1[chave])
}

//factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio')
// console.log(p1.nomeCompleto)
// console.log(p1)

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    // Object.freeze(this)

}

const p2 = new Pessoa("Luiz", "Miranda")
// Object.freeze(p2)
// p2.nome = 'Teste'
console.log(p2)