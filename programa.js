// (EcmaScript 5 - Até Jul/2015) - ex: uso do var

// armazenando dados 
// entrada de dados
var nome = prompt("Digite seu nome:");
var email = prompt("Digite seu email:");
var telefone = prompt("Digite seu telefone:");

// executando instruções
// comando(param1, param2);
// contexto.comando(param1, param2);

// saida de dados (console)
console.log("nome", nome);
console.log("email", email);
console.log("telefone", telefone);

// saida de dados (tela)
document.write("<hr><p>Nome: ", nome, "</p>");
document.write("<p>Email: ", email, "</p>");
document.write("<p>Telefone: ", telefone, "</p><hr>");
