
let end = {
    rua: 'Rua Principal',
    numero: 456,
    estado: 'BH',
    compelmento: 'Sem complemento',
    cep: '12300-000'
}

let pessoa = {
    nome: 'Joana',
    idade: 23,
    cpf: '123.123.123-12',
    altura: 156,
    // endereco: end, //esse é outro objeto

    // os três pontos são chamados operador 'destructuring'
    endereco:{...end}, // serve para criar uma cópia do objeto 'end' e caso seja alterado, não irá alterar o objeto principal

    solteiro: true,
    habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    cumprimentar() {
        /*Quando eu desejo referenciar o mesmo objeto dentro dele mesmo, eu utilizo a palavra chave 'this'*/
        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    }
}

// console.log(end)
// console.log(pessoa.endereco.estado)

// pessoa.cumprimentar()
// pessoa.nome = 'Pablo Escobar'
// pessoa.cumprimentar()
// pessoa.habilidades.push('Angular')
// console.log(pessoa.habilidades)
// console.log(pessoa['cpf'])

console.log(end.rua)
console.log(pessoa.endereco.rua)

pessoa.endereco.rua = "Rua secundária"

console.log(end.rua)
console.log(pessoa.endereco.rua)
