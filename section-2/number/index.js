let num1 = 1500.2069309 //number
let num2 = 25 //number
 
// num1 = num1.toString // altera permanentemente para string
console.log(num1.toString() + num2) //o .toString nao altera a variavel para string, somente faz a alteração no momento
console.log(typeof num1)

console.log(num1.toString(2)) //representação binaria utilizando o codigo 2
console.log(num1.toFixed(2)) //arredonda o numero com a quantidade de casas decimais

console.log(Number.isInteger(num2)) //informa se o numero é int ou float retornando true ou false

let nanmult = 3 * 'Fon'
console.log(Number.isNaN(nanmult)) //confere se a conta vai ser invalida (Not a Number) com true ou false

