console.log("=== CALCULADORA ===");

function calcular() {
  // entrada (captura) dados 
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  console.log(num1, typeof num1);
  console.log(num2, typeof num2);

  // processamento
  const total = num1 + num2;
  console.log(total);

  // saída (exibir) dados
  document.getElementById("result").value = total;
}
