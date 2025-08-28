const numeros = [1, 12, 33, 24, 335, 66, 7, 8, 90, 23, 123, 2]

const umNumeros = numeros.reduce((acumulador, valor, indice, array) => acumulador += valor, 0) // caso nao insira o ",0" para indicar o valor do acumulador, ele será sempre o indice 0
// console.log(umNumeros)
const somaParNumeros = numeros.reduce((acumulador, valor) => {
    if (0 === valor % 2) {
        acumulador += valor
    }
    return acumulador
}, 0)
// console.log(somaParNumeros)

const paresNumeros = numeros.reduce((acumulador, valor, indice, array) => {
    let conta = valor % 2 //mais facil ser feito com .filter
    if (0 === conta) {
        acumulador.push(valor)
    }
    return acumulador
}, [])
// console.log(paresNumeros)

const dobroNumeros = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador.push(valor * 2) //mais facil ser feito com .map
    return acumulador
}, [])
// console.log(dobroNumeros)

const pessoas = [
    { nome: "marlon", idade: 21 },
    { nome: "pedro", idade: 11 },
    { nome: "joao", idade: 41 },
    { nome: "maria", idade: 1 },
    { nome: "luiz", idade: 23 },
    { nome: "cleberona", idade: 33 },
    { nome: "arthur", idade: 12 }
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(pessoaMaisVelha)

const pessoaMaisNova = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade < valor.idade) return acumulador
    return valor
})
console.log(pessoaMaisNova)