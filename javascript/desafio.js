const preco = parseFloat(prompt("Qual é o preço do produto"));
const mensagem = `
Escolha o método de pagamento:
Digite 1 para pagamento à vista;
Digite 2 para pagamento no cheque;
Digite 3 para pagamento no cartão;`;

let pagamento = Number(prompt(mensagem));

// if (pagamento == 1 ) {
//     let precoFinal = preco * 0.9;
//     alert(`Você irá pagar ${precoFinal.toFixed(2)} reais`)

// } else if (pagamento == 2 ) {
//     let precoFinal = preco * 0.85;
//     alert(`Você irá pagar ${precoFinal.toFixed(2)} reais`)

// } else if (pagamento == 3) {
//     let precoFinal = preco;
//     alert(`Você irá pagar ${precoFinal.toFixed(2)} reais`)

// } else if (pagamento == 4) {
//     let precoFinal = parseInt(preco * 1.1);
//     alert(`Você irá pagar ${precoFinal.toFixed(2)} reais`)

// } else {
//     alert('Digite um número válido.')
// }

if (pagamento == 1 || pagamento == 2) {
  const precoFinal = preco * 0.9;
  alert(`O preço final ficou em ${precoFinal} reais`);
} else if (pagamento == 3) {
  const parcelas = parseInt(prompt("Informe a quantida de parcelas"));
  if (parcelas == 1) {
    const precoFinal = preco * 0.85;
    alert(`O preço final ficou em ${precoFinal} reais`);
  } else if (parcelas == 2) {
    const precoFinal = preco;
    alert(`O preço final ficou em ${precoFinal} reais`);
  } else if (parcelas >= 3) {
    const precoFinal = preco * 1.1;
    alert(`O preço final ficou em ${precoFinal} reais`);
  }
}
