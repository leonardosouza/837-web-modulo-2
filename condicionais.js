console.log("=== CONDICIONAIS ===");

// entrada
const aluno = prompt("Digite o nome do aluno:", "Aluno");
const nota = prompt("Digite a nota (0-10):");
console.log(aluno, nota);

// processamento
let resp = null;

// Exemplo 1 - IF
/* 
if (nota >= 6) {
  resp = "Aprovado!";
}

if (nota < 6 && nota >= 4) {
  resp = "Recuperação!";
}

if (nota < 4) {
  resp = "Reprovado!";
}
*/

// Exemplo 2 - IF / ELSE (ENCADEADO)
/*
if (nota >= 6) {
  resp = "Aprovado!";
} else {
  if (nota < 4) {
    resp = "Reprovado!";
  } else {
    resp = "Recuperação!";
  }
}
*/ 

// Exemplo 3 - IF / ELSE / IF
if (nota >= 6) {
  resp = "Aprovado!";
} else if (nota < 4) {
  resp = "Reprovado!";
} else {
  resp = "Recuperação!";
}

// Exemplo 4 - SWITCH / CASE
/*
switch (nota) {
  case "0":
  case "1":
  case "2":
  case "3":
  case "4":
    resp = "Reprovado";
    break;

  default:
    resp = "Nem um nem outro";
    break;
}
*/

// Exemplo 5 - SWITCH / CASE - PRATICO
const diaSemana = prompt("Digite o dia da semana:");
let dia = null;
switch (diaSemana) {
  case "1":
      dia = "DOM";
    break;

  case "2":
      dia = "SEG";
    break;

  case "3":
      dia = "TER";
    break;

  case "4":
      dia = "QUA";
    break;

  case "5":
      dia = "QUI";
    break;

  case "6":
      dia = "SEX";
    break;

  case "7":
      dia = "SAB";
    break;
}

console.log(resp);

// saída
// document.write(aluno, "<br>", resp);
document.write(`
Aluno: ${aluno} <br> 
Nota: ${nota} <br>
Situação: ${resp}
Dia da Semana: ${dia}`);
