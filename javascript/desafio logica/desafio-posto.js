const precoGasolina = 2.70;
const precoAlcool = 1.90;

const mensagem1 = `
Qual o tipo de combustível?
Digite A para álcool de preço R$ ${precoAlcool.toFixed(2)};
Digite G para gasolina de preço R$ ${precoGasolina.toFixed(2)};
`
const mensagem2 = `
Quantos litros irá abastecer?`

const combustivel = prompt(mensagem1)
const quantidade = Number(prompt(mensagem2))

if (combustivel == 'A') {
    if (quantidade <= 25){
        const precoFinal = (quantidade * precoAlcool) * 0.98
        alert(`Seu total será de R$${precoFinal}.`)
    } else {
        const precoFinal = (quantidade * precoAlcool) * 0.96
        alert(`Seu total será de R$${precoFinal}.`)
    }
} else {
    if (quantidade <= 25){
        const precoFinal = (quantidade * precoGasolina) * 0.97
        alert(`Seu total será de R$${precoFinal}.`)
    } else {
        const precoFinal = (quantidade * precoGasolina) * 0.95
        alert(`Seu total será de R$${precoFinal}.`)
    }
}