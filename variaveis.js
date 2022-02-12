console.log("=== VARIAVEIS ===");

// Javascript - Especificação -> EcmaScript
// Jun/2015 - ES5 -> var
// Jul/2015 - ES6 -> let / const

// Padrão ASI - Automatic Semicolon Insert

// Tipos de Dados / Tipos de Variáveis
// Javascript -> Tipagem Dinâmica
// Tipos Primitivos - string, number, boolean, null, undefined
var nome = "Leonardo"; // string
console.log("nome", nome, typeof nome);

let idade = 39; // number
let altura = 1.89; // number
console.log("idade", idade, typeof idade);
console.log("altura", altura, typeof altura);

const magro = false; // boolean
console.log("magro", magro, typeof magro);

var nula = null; // null
console.log("nula", nula, typeof nula);

var indefinida; // undefined
console.log("indefinida", indefinida, typeof indefinida);

// Diferenças entre var / let / const
// var - redeclaração da variável (permite)
var nome = 1;
console.log("nome", nome, typeof nome);

// var - reatribuição de valor (permite)
nome = false;
console.log("nome", nome, typeof nome);

// let - redeclaração de variável (não permite)
// let idade = 25; // SintaxError

// let - reatribuição de valor (permite)
idade = 25;
console.log("idade", idade, typeof idade);

// const - redeclaração de variável (não permite)
// const magro = true; // SintaxError

// const - reatribuição de valor (não permitido)
// magro = true; // TypeError
