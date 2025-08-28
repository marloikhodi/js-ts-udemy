const ar = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let num = 0
ar.forEach((valor, indice, array) => {
    num += valor
    console.log(valor)
    console.log(array[indice])
});

console.log(num)