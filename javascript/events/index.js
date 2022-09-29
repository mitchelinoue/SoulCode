
let contador = 1

//função responsável por criar um alerta na tela

function mostrarAlerta() {
    /*o objeto document é uma representação do HTML do seu site dentro do JS */
    /*classlist retorna um array com todas as classes que um elemento possui*/
    const divAlerta = document.getElementById('alerta')

    divAlerta.classList.add('mostrar')

    document.getElementById('frase').innerHTML =`Você já clicou no botão ${contador} vezes!`
    
    contador++
}

function sumirAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

/* addEventListener é um método que te permite ouvir eventos do HTML pelo JavaScript


Para eventos não é necessário a utilização do "on" (onclick)

Se precisar passar uma função como parâmetro para outra função, eu passo a referência dela (função sem parênteses)
*/

btnMostrar.addEventListener('click', mostrarAlerta)

btnFechar.addEventListener('click', sumirAlerta)