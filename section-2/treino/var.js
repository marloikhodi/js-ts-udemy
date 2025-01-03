let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const avar = varA
const bvar = varB
const cvar = varC

varC = avar
varA = bvar
varB = cvar

// [varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
