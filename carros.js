console.log("=== CARROS ===");

// PREMISSAS
// 1 - ARMAZENAR DADOS EM UM OBJETO
// 2 - COLOCAR O OBJETO DENTRO DE UM ARRAY
// 3 - EXIBIR TUDO QUE FOR CADASTRADO DENTRO DO CONSOLE.TABLE
const carros = [];

function adicionar() {
  // entrada
  const modelo = document.getElementById("modelo");
  const ano = document.getElementById("ano");
  const cor = document.getElementById("cor");
  const situacao = document.getElementById("situacao");
  // console.log(modelo, ano, cor, situacao);
  console.log(modelo.value, ano.value, cor.value, situacao.value);
  // console.log(situacao);
  // console.log(situacao.options); // array
  // console.log(situacao.options.selectedIndex); // indice
  // console.log(situacao.options[situacao.options.selectedIndex].value);

  // processamento
  const carro = {
    modelo: modelo.value,
    ano: ano.value,
    cor: cor.value,
    situacao: situacao.value
  };

  console.log(carro);
  carros.push(carro);

  // saida
  console.table(carros);
}
