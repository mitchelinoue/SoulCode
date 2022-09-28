const mensagem1 = 'Me diga seu peso'
const mensagem2 = 'Me diga sua altura'

const peso = prompt(mensagem1)
const altura = prompt(mensagem2)

const imc = peso / (altura ** 2)

if (imc < 18.5) {
    alert(`Seu imc é igual a ${imc.toFixed(2)} e você está abaixo do peso normal.`)
} else if (imc >= 18.5 && imc < 25) {
    alert(`Seu imc é igual a ${imc.toFixed(2)} e você está com peso normal.`)
} else if (imc >= 25 && imc < 30) {
    alert(`Seu imc é igual a ${imc.toFixed(2)} e você está acima do peso normal.`)
} else {
    alert(`Seu imc é igual a ${imc.toFixed(2)} e você está obeso.`)
}