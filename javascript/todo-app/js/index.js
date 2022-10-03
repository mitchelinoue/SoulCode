//Método de recuperação de elementos HTML

//document.getElementsByTagName('')[] recupera todos elementos a partir da tag (pode colocar [] para especificar qual dos)

//document.getElementById('') recupera elemento específico com a ID nomeada

// querySelector recupera o primeiro elemento CSS que atenda a um seletor css informado

//a propriedade value representa o atributo value dos elementos de formulário HTML, para acessarmos o valor que está dentro deles

//createElement é o método responsável por gerar novos elementos HTML do JavaScript a partir do nome da tag


const todoForm = document.getElementById('todo-form')
const todos = []

todoForm.addEventListener('submit', function(evento) {

    evento.preventDefault() //não permite que a página atualize ao enviar o formulário

    evento.stopPropagation() // cancela a propagação do evento que foi emitido para os elementos pai, evitando que outros eventos sejam emitidos

    const todoInput = document.querySelector('#todo')
    
    todos.push(todoInput.value)
    
    todoInput.value = '' //zera o campo de escrita do formulário

    renderizarTodos()
})

function renderizarTodos(){
    const todosListSection = document.querySelector('#todos-list')

    todosListSection.innerHTML = ''

    for(let tarefa of todos){
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning') //cria a 1ª div

        const divCardBody = document.createElement('div') //cria a 2ª div
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p') //cria o parágrafo
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        pTodoText.innerText = tarefa //innertext informa qual o texto dentro do elemento HTML

        //arrow function sempre são anonimas
        const btnDelete = document.createElement('button') //cria o button
        btnDelete.classList.add('btn', 'delete-todo')

        btnDelete.addEventListener('click', () => { //para deletar
            const index = todos.indexOf(tarefa) //indexOf informa qual índice se encontra determinado valor dentro do seu array, se não achar ele retorna -1
            todos.splice(index, 1) //splice serve para excluir um determinado valor do array a partir do índice 

            renderizarTodos()
        })
        
        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        btnDelete.appendChild(spanIcon) //appendChild serve para colocar novos elemento HTML dentro de outros (pai/filho)

        divCardBody.append(pTodoText, btnDelete) //append serve para colocar um ou mais elementos HTML dentro de outros (a ordem importa)

        divCard.appendChild(divCardBody)

        todosListSection.appendChild(divCard)

    }
}
