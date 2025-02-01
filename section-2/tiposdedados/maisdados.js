/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (biing, symbol) - valor

Referencia (mutavel) - array, object, function 
*/

let a = 'Uma coisa'
let b = a
console.log(a, b) //Uma coisa Uma coisa
a = 'Outra coisa'
console.log(a, b) //Outra coisa Uma coisa

let first = [1, 2, 3]
let second = first
console.log(first, second) //[ 1, 2, 3 ] [ 1, 2, 3 ]
first.pop()
console.log(first, second) //[ 1, 2 ] [ 1, 2 ]