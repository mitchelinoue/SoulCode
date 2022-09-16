const base = Number(prompt("Qual a base do triângulo retângulo?"))
const altura = Number(prompt("Qual a altura do triângulo retângulo?"))

const area = base*altura/2
const hipotenusa = Math.sqrt(base**2 + altura**2)
const perimetro = hipotenusa + base + altura

alert(`Área = ${area} e perímetro = ${perimetro}`)