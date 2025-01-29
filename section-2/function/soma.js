function soma(x, y) {
    const resultado = x + y //oque está dentro da function nao interage com oque esta fora da function
    return resultado //return será o ultimo valor dentro da função, nada abaixo ira ser executado
}

console.log(soma(1, 2))
console.log(soma(5, 15))
console.log(soma(10, 20))

const resultado = soma(2, 2) // outra const resultado, caso em cima estivesse fora da function, daria erro
console.log(resultado)

const notNumber = soma() //esta sendo feita a soma de dois valores undefined
console.log(notNumber)

