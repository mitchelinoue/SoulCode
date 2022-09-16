alert("Código Funcionando!") // mostrar uma mensagem para o usuário
const nomeUsuario = prompt("Olá usuário, qual o seu nome?") // mostra uma mensagem e recebe/guarda uma valor

let num = Number(prompt(`Olá ${nomeUsuario}! Digite um número`))

console.log(typeof num) //typeof retorna o tipo de valor que a variável armazena

const a = ++num
const b = num--

alert(`O antecessor é ${b} e o sucessor é ${a}!`)



