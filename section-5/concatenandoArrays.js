const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const a3 = num1.concat(num2, [7, 8, 9], 'Teste')
const a4 = [...num1, 'teste', ...num2, 7, ...[8, 9, 10]]
console.log(a3, a4)