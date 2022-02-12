console.log("=== FUNCOES ===");

// Declaração de Função Nomeada
function soma(n1=0, n2=0) { // default parameter
  return n1 + n2;
}

// NaN - Not a Number
console.log( soma ); // ref func
console.log( soma() ); // 0
console.log( soma(5) ); // 5
console.log( soma(5, 10) ); // 15

// Declaração de Função Anônima
const sum = function (a=0, b=0) { // default parameter
  return a + b;
}

console.log( sum ); // ref func
console.log( sum() ); // 0
console.log( sum(5) ); // 5
console.log( sum(5, 10) ); // 15

sum(3, 5); // 8
