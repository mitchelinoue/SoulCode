const mensagem1 = `
Qual seu gênero?
Digite H para homem;
Digite M para mulher.`

const mensagem2 = `
Agora me diga sua altura em metros.`

const genero = prompt(mensagem1)
const altura = Number(prompt(mensagem2))

if (genero == 'H') {
    const peso = (72.7 * altura) - 58
    alert(`Seu peso ideal é de ${peso.toFixed(2)} kg` )
} else if (genero == 'M'){
    const peso = (62.1 * altura) - 44.7
    alert(`Seu peso ideal é de ${peso.toFixed(2)} kg` )
} else {
    alert('Digite corretamente os valores')
}

