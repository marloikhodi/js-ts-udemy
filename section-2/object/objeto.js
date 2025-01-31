const pessoa1 = { //objeto literal
    nome: 'marlo',
    sobrenome: 'serafim',
    idade: 20
}

console.log(pessoa1.nome)

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa2 = criaPessoa('marlo', 'santos', 25)
console.log(pessoa2.nome)