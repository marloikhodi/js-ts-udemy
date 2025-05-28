function conta(operador, acumulador, ...numeros) { //os "..." significa que a variavel numeros vai pegar todo o resto dos parametros passados (rest operator)

    console.log(numeros) //array de valores

    for (let num of numeros) {//of pega os valores do parametro e passa para o primeiro (no caso, pega de numeros e passa para num)
        if (operador === "+") acumulador += num
        if (operador === "-") acumulador -= num
        if (operador === "*") acumulador *= num
        if (operador === "/") acumulador /= num
    }
    console.log(acumulador)
}

conta(`-`, 0, 20, 10, 30, 40)

const arrow = (...args) => { console.log(args) } // pode ser usado o ...args como um arguments dentro da arrow functions
arrow(1, 2, 3, 4, 5)