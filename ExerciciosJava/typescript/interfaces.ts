// let pessoa = {
//     nome: "Pietro",
//     idade: 22,
//     altura: 1.8,
//     cpf: "123.456.789-10",
//     solteiro: false,
//     habilidades: ["Java", "Angular", "TypeScript", "JavaScript", "Node.js", "SpringBoot"],
//     endereco:{
//         rua: "Rua feliz",
//         numero: 567,
//         estado: "CE",
//         complemento: "Sem complemento",
//         cep: "12345-678",
//     }
// }

// let pessoa2 = {
//     nome: "Pietro",
//     idade: 22,
//     altura: 1.8,
//     cpf: "123.456.789-10",
//     solteiro: false,
//     habilidades: ["Java", "Angular", "TypeScript", "JavaScript", "Node.js", "SpringBoot"],
//     endereco:{
//         rua: "Rua feliz",
//         numero: 567,
//         estado: "CE",
//         complemento: "Sem complemento",
//         cep: "12345-678",
//     },
//     rg: "123456789-0",
// }


//Interface serve para padronizat elementos

interface Endereco{
    rua: string,
    numero: number,
    estado: string,
    complemento: string,
    cep: string,
}

interface Pessoa {
    nome: string,
    idade: number,
    altura: number,
    cpf: string,
    solteiro: boolean,
    habilidades: string[],
    endereço: Endereco,
    rg: string,
    cumprimentar(): void,
}

const p: Pessoa = {
    altura: 1.9,
    nome: "Faustão",
    idade: 12,
    cpf: "123456789-10",
    solteiro: true,
    habilidades:["HTML"],
    endereço: {
        rua:"Rua Bacana",
        numero: 123,
        estado: "PE",
        complemento: "Apartamento",
        cep: "12345-678"
    },
    rg: "123456-78",
    cumprimentar() {
        console.log("Saudações, meu nome é " + this.nome)
    },
}

const p2: Pessoa = {
    nome: "Paula",
    altura: 1.7,
    idade: 24,
    cpf: "155454645-12",
    habilidades:["HTML"],
    rg: "12135552",
    solteiro: false,
    endereço: {
        rua:"Rua Bacana",
        numero: 123,
        estado: "PE",
        complemento: "Apartamento",
        cep: "12345-678"
    },
    cumprimentar() {
        console.log("Olá para todos!")
    }
}





