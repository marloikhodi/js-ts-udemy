const pessoa1 = { //objeto literal
    nome: 'marlo',
    sobrenome: 'serafim',
    idade: 20,

    fala() {
        console.log(`Ola, me chamo ${this.nome} ${this.sobrenome}, eu tenho ${this.idade} anos de idade`)
    }
}

pessoa1.fala()

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,// nome: nome,
        sobrenome,// sobrenome: sobrenome,
        idade// idade: idade
        //quando o valor é igual ao parametro, nao tem a necessidade de repetição
    }
}

const pessoa2 = criaPessoa('marlo', 'santos', 25)
console.log(pessoa2.nome)