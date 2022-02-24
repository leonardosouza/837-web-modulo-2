console.log("=== ARRAY ===");

// Antipadrão
const carro1 = "Gol";
carro1.repeat
/*
const carro2 = "Corsa";
const carro3 = "Fox";
*/

// array literal
const carros = ["Gol", "Corsa", "Fox"];

// contexto.comando();
carros.push("Corolla"); // add item no final
carros.unshift("Marea"); // add item no inicio
carros.splice(1, 1); // remove item na posicao X
carros.splice(0, 1, "BMW"); // substitui item na posicao X
carros.splice(2, 0, "Fusca", "Golf"); // add item na posicao X
// carros.pop(); // remove item do final
// carros.shift(); // remove item do inicio
carros.sort(); // ordena items 
carros.reverse(); // inverte items

document.write("- ", carros[0], "<br>" );
document.write("- ", carros[1], "<br>"  );
document.write("- ", carros[2], "<br>"  );
document.write("- ", carros[3], "<br>"  );

document.write("<hr>");

for(let i=0; i < carros.length; i++) {
  document.write("- ", carros[i], "<br>" );
}

document.write("<hr>");

// Implementação 1
// Função Nomeada
function pegaCarro(modelo, pos) {
  console.log("pegou?", modelo, pos);
  document.write("1 => ", modelo, "<br>");
}

carros.forEach( pegaCarro );
// Internamente:
// pegaCarro("Golf", 0); // loop 0
// pegaCarro("Fusca", 1); // loop 1
// pegaCarro("Fox", 2); // loop 2

document.write("<hr>");

// Implementação 2
// Função Anônima
carros.forEach(function(carro, i) {
  console.log("funfa?", carro, i);
  document.write("2 => ", carro, "<br>");
});



console.log(carros);
console.log(carros.length);
