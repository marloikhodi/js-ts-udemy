function retornaFuncao(nome) {
    return function () {
        return nome
    }
}

const funcao = retornaFuncao('Luiz') //clousure com nome Luiz
const funcao2 = retornaFuncao('Joao') //clousure com nome Joao

console.log(funcao)
console.log(funcao2)

console.log(funcao(), funcao2())