// const numeros = [1, 2, 3]
// const [a, b, c] = numeros //cada indice do array esta sendo atribuidos a uma variavel, sendo assim, feito a atribuiçao por destruturação
// console.log(a, b, c)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const primeiroNumero = numeros[0]

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros //cada const está pegando um indice do array, o "...resto" vai pegar tudo que falta no array
console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto)