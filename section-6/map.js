const pessoas = [
  { id: 3, nome: "cleber" },
  { id: 2, nome: "maria" },
  { id: 1, nome: "joao" },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }
const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

// console.log(novasPessoas);
// console.log(novasPessoas.get(2));

// for (const [indent, { id, nome }] of novasPessoas) {
//   console.log(indent, id, nome);
// }

// for (const pessoa of novasPessoas.values()) {
//   console.log(pessoa);
// }

novasPessoas.delete(2);
console.log(novasPessoas);
