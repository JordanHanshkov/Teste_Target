// Calcula o menor valor de faturamento diário
let menorValor = faturamentoDiario[0];
for (let i = 1; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] < menorValor) {
    menorValor = faturamentoDiario[i];
  }
}

// Calcula o maior valor de faturamento diário
let maiorValor = faturamentoDiario[0];
for (let i = 1; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > maiorValor) {
    maiorValor = faturamentoDiario[i];
  }
}

// Calcula a média mensal de faturamento, desconsiderando dias sem faturamento
let soma = 0;
let diasComFaturamento = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > 0) {
    soma += faturamentoDiario[i];
    diasComFaturamento++;
  }
}
let mediaMensal = soma / diasComFaturamento;

// Conta o número de dias em que o faturamento diário foi superior à média mensal
let diasAcimaDaMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > mediaMensal) {
    diasAcimaDaMedia++;
  }
}

// Exibe os resultados
console.log("Menor valor de faturamento diário: " + menorValor);
console.log("Maior valor de faturamento diário: " + maiorValor);
console.log("Número de dias com faturamento diário acima da média mensal: " + diasAcimaDaMedia);
