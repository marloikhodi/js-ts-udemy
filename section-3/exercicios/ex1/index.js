/// minha solução

const num1 = 111
const num2 = 1

if (num1 > num2) {
    console.log(num1)
} else { console.log(num2) }

///

function high(x, y) {
    return x > y ? x : y //para dar return com ternario, deve ser hamado no começo 
}
console.log(high(19, 1900))

const high2 = (x, y) => x > y ? x : y
console.log(high2(19, 2000))