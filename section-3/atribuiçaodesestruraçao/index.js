// const numeros = [1, 2, 3]
// const [a, b, c] = numeros //cada indice do array esta sendo atribuidos a uma variavel, sendo assim, feito a atribuiçao por destruturação
// console.log(a, b, c)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const primeiroNumero = numeros[0]

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros //cada const está pegando um indice do array, o "...resto" vai pegar tudo que falta no array (rest operator {tambem chamado de spread operator})
// console.log(primeiroNumero, segundoNumero, terceiroNumero)
// console.log(resto)

const [esseSim1, , esseSim2, , esseSim3, ...restante] = ['sim', 'nao', 'sim', 'nao', 'sim', 'nao']
// console.log(esseSim1, esseSim2, esseSim3, restante)

const numerosIndices = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(numerosIndices[1][2]) //retorna 6