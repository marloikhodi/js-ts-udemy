const nome = 'Marlo' // string
const nome2 = "Marlo" // string
const nome3 = `Marlo` // string
const num1 = 10 // number
const num2 = 10.52 // number
let nomeAluno // undefined -> nao aponta pra local nenhum na memoria
const sobrenomeAluno = null // nulo -> nao aponta pra local nenhum na memoria
const aprovado = true // boolean = true or false 

console.log(typeof nome, nome)
console.log(typeof nome2, nome2)
console.log(typeof nome3, nome3)
console.log(typeof num1, num1)
console.log(typeof num2, num2)
console.log(typeof nomeAluno, nomeAluno)
console.log(typeof sobrenomeAluno, sobrenomeAluno)
console.log(typeof aprovado, aprovado)
//               0123456789... toda letra tem um indice, valor entro da string começando do 0
const strings = "O rato roeu a roupa do rei de roma."

console.log(strings[5])
console.log(strings[12])
console.log(strings.charAt(5))
console.log(strings.charAt(12))

console.log(strings.concat(" em", " um lindo dia"))

console.log(`${strings} em um lindo dia`)

console.log(strings.indexOf('t', 6))

console.log(strings.match(/[a-z]/g))
console.log(strings.match(/[a-z]/))

console.log(strings.search(/t/))

console.log(strings.replace("Um", "Outra"))
console.log(strings.replace(/t/g, "saas"))

console.log(strings.length) //tamanho do indice, contando o 0

console.log(strings.slice(0, 2))
console.log(strings.slice(-6, -1))

console.log(strings.split(' ', 2))
console.log(strings.split(' ', 3))

console.log(strings.toUpperCase())
console.log(strings.toLowerCase())
