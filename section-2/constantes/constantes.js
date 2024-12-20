// Regras de constantes
// Não podemos criar constantes com palavras reservadas (if, else, console, etc)
// constantes precisam ter nomes significativos, auxiliando na criação do codigo
// Não pode criar constantes com nome começando em numero
// Nao podem ter nomes ou espaços
// Case-sensitive
// Nao podemos modificar o valor de uma constante
// Nao utilize var, utilize const

const stringNum = "5"
const firstNum = 5
const secondNum = 10
const result = firstNum * secondNum
const resultDup = result * 2
let resultTrip = result * 3
resultTrip = resultTrip + 5

// Verificaçao de dado
console.log(firstNum + secondNum)
console.log(typeof (firstNum + secondNum))

console.log(stringNum + secondNum)
console.log(typeof (stringNum + secondNum))


// + tem a propriedade de contatenar, por exemplo "5" + 10 resulta em 510