const numeros = [1, 12, 33, 24, 335, 66, 7, 8, 90, 23, 123, 2]

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac += valor)
console.log(numerosPares)