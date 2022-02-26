console.log("=== OBJETOS ===");

// PROBLEMA
// const carro1 = ["Gol", 2010, "vermelho", "usado"];
// const carro2 = ["Fox", 2015, "preto", "zero"];
// const carro3 = ["Uno", 2000, "verde", "usado"];

// const carros = [carro1, carro2, carro3];

// console.log(carro1);
// console.log(carro2);
// console.log(carro3);

// for (let index = 0; index < carro1.length; index++) {
//   const element = carro1[index];
//   console.log(element);
// }

// for (let index = 0; index < carro2.length; index++) {
//   const element = carro2[index];
//   console.log(element);
// }

// for (let index = 0; index < carro3.length; index++) {
//   const element = carro3[index];
//   console.log(element);
// }

// for (let index = 0; index < carros.length; index++) {
//   console.log( carros[index][0] );
//   document.write(
//     carros[index][0], // modelo
//     " - ",
//     carros[index][2], // cor
//     "<br>"
//   )
// }

// SOLUÇÃO
// const carro1 = ["Gol", 2010, "vermelho", "usado"];
// const carro2 = ["Fox", 2015, "preto", "zero"];

// objeto literal
const carro1 = {
  modelo: "Gol",
  ano: 2010,
  cor: "vermelho",
  situacao: "usado"
};

const carro2 = {
  modelo: "Fox",
  ano: 2015,
  cor: "preto",
  situacao: "zero"
};

// array de objetos
// const carros = [carro1, carro2];

// array de objetos
const carros = [
  {
    modelo: "Fox",
    ano: 2015,
    cor: "preto",
    situacao: "zero"
  },
  {
    modelo: "Gol",
    ano: 2010,
    cor: "vermelho",
    situacao: "usado"
  },
  {
    modelo: "Uno",
    ano: 2000,
    cor: "verde",
    situacao: "usado"
  }
];


// console.log(carro1);
// console.log(carro2);

// objeto.propriedade
// console.log(carro1.modelo, carro1.situacao);
// console.log(carro2.modelo, carro2.situacao);

carros.forEach(function(carro) {
  console.log(carro.modelo, carro.situacao);
});

console.table(carros);
console.log("===");

let zeros = carros.filter(function(carro) {
  return carro.situacao == "zero";
});

console.table(zeros);
