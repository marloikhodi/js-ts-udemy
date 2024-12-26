/*  
Aritimeticos
+ adição / concatenação
- / *
** potenciação (numero elevado)
% resto da divisao

++ operador de incremento
-- operador de decremento

(operador)= operador de atribuição

ordem de procedencia:
()
**
* / %
+ -

NaN - Not a Number
*/

const num1 = 11
const num2 = 3

console.log(num1 + num2)
console.log(num1 * num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(num1 % 2)

const check = num1 % 2
check === 0 ? console.log('numero par') : console.log('numero impar')

let contador = 1
contador++ // operador de incremento adiciona um numero a mais
console.log(++contador)

contador-- // operador de decremento reduz um numero a menos
console.log(--contador)

let contagem = 0
contagem += 50 //funciona com qualquer operação
console.log(contagem) //contador = contador + 50
contagem += 50
console.log(contagem)

// const num = 40
// const str = 'oi'

// console.log(num * str)

const num = 40
const str = Number('5')

console.log(num + str)