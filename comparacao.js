console.log("=== COMPARACAO ===");

function comparacao() {
  console.log("Comparando Maior Que...");

  // entrada
  const n1 = document.getElementById("n1");
  console.log(n1.value);

  const n2 = document.getElementById("n2");
  console.log(n2.value);

  // processamento
  const result = n1.value > n2.value;
  console.log(result);

  // saída
  document.getElementById("result").value = result;
}
