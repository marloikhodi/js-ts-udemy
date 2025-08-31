const produto = { nome: "caneca", preco: 1.8 };
const outraCoisa = {
  ...produto, //maneira simples de copiar obj
  material: "porcelana",
};
Object.defineProperty(produto, "nome", {
  value: "caneca",
  writable: false,
  enumerable: true,
  configurable: true,
});
// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

// console.log(Object.keys(produto))
// console.log(Object.values(produto))
// console.log(Object.entries(produto))

outraCoisa.quantidade = 10;
// console.log(outraCoisa)
// console.log(produto)

const outroProduto = Object.assign({}, produto, { material: "porcelana" });
// console.log(outroProduto)

// for (let a of Object.keys(outraCoisa)) {
//     console.log(a,outraCoisa[a])
// }
