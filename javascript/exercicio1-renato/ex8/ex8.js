const raio = Number(prompt("Qual o raio da lata?"))
const altura = Number(prompt("Qual a altura da lata?"))

const base = 3.14*raio**2
const volume = base*altura

alert(`O volume da lata é ${volume}`)