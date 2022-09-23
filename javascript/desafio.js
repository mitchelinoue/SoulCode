
let preco = parseFloat(prompt("Qual é o preço do produto"));

while (isNaN(preco) == true || preco <= 0) {
  alert('O preço digitado é inválido. Por favor informe o preço apenas com números, sem carácteres especiais (letras ou acentos)');
  preco = parseFloat(prompt("Qual é o preço do produto"));
}

const mensagem = `
Escolha o método de pagamento:
Digite 1 para pagamento à vista;
Digite 2 para pagamento no cheque;
Digite 3 para pagamento no cartão;`;

let pagamento = parseInt(prompt(mensagem));

while (isNaN(pagamento) == true || pagamento > 3 || pagamento <= 0) {
  alert('O pagamento digitado é inválido. Por favor informe o preço apenas com números, sem carácteres especiais (letras ou acentos)');
  pagamento = parseInt(prompt(mensagem));
}


if (pagamento == 1 || pagamento == 2) {
  const precoFinal = preco * 0.9;
  alert(`O preço final ficou em ${precoFinal.toFixed(2)} reais`);
} else if (pagamento == 3) {
  const parcelas = parseInt(prompt("Informe a quantida de parcelas"));
  if (parcelas == 1) {
    const precoFinal = preco * 0.85;
    alert(`O preço final ficou em ${precoFinal.toFixed(2)} reais`);
  } else if (parcelas == 2) {
    const precoFinal = preco;
    alert(`O preço final ficou em ${precoFinal.toFixed(2)} reais`);
  } else if (parcelas >= 3) {
    const precoFinal = preco * 1.1;
    alert(`O preço final ficou em ${precoFinal.toFixed(2)} reais`);
  } 
}
