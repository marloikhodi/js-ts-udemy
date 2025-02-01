/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (biing, symbol) - 

Referencia (mutavel) - array, object, function 
*/

let a = 'Uma coisa'
let b = a //copia
console.log(a, b) //Uma coisa Uma coisa
a = 'Outra coisa'
console.log(a, b) //Outra coisa Uma coisa

let first = [1, 2, 3]
let second = first
let third = [...first] //copia
console.log(first, second, third) //[ 1, 2, 3 ] [ 1, 2, 3 ] [ 1, 2, 3 ]
first.pop()
console.log(first, second, third) //[ 1, 2 ] [ 1, 2 ] [ 1, 2, 3 ]