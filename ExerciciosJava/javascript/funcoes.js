/*
Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função. você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
*/

function cumprimentar(mensagem = 'Mensagem padrão', repetir = 3) {
    for (let i = 1; i <= repetir; i++){
       alert(mensagem) 
    }
}

function soma(num, num2){
    let result = num + num2
    return result
}

function maiorValor(a, b){
    if(a > b){
        return a
    } else {
        return b
    }
}

let resultado = soma(5, 9)

console.log(`O valor da variável é ${resultado}`)

console.log(maiorValor(5, 10))

const n1 = parseInt(prompt(`Informe o primeiro número`))
const n2 = parseInt(prompt(`Informe o segundo número`))

alert(`O maior valor entre esses números é ${maiorValor(n1, n2)}`)

// Crie uma função que gera um resultado de uma equação de 2º grau
//ax² + bx + c = 0
