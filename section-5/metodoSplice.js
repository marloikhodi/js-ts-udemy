const numeros = [10, 20, 30, 40, 50, 60, 70];

//nomes.splice(indice inicial atual, delete, elem1, elem2,elem3)
numeros.splice(1, null, 80, 90, 100);
console.log(numeros);

const numero = numeros.splice(1, 1);
console.log(numero);
console.log(numeros);
