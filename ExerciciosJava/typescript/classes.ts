//atributos ou propriedades

class cachorro{

    // nome: string 
    // raca: string
    // cor: string 
    // idade: number 
    // peso: number 
    // morde: boolean 
    // vacinado: boolean 
    // pedigree: boolean 

/*
    Método construtor

    Serve para ao criar um novo objeto de classe, possamos receber valores para que a classe utilize-os

    se o programador não criar o método construtor, a própia linguagem irá gerar um método construtor padrão
*/

    constructor(
        public nome: string,
        public raca: string,
        public cor: string ,
        public idade: number,
        public peso: number,
        public morde: boolean,
        public vacinado: boolean,
        public pedigree: boolean ,
        ) {


        //this faz referência a própria classe dentro dela mesmo

        // this.nome = nome
        // this.raca = raca
        // this.cor = cor
        // this.idade = idade
        // this.peso = peso
        // this.morde = morde
        // this.vacinado = vacinado
        // this.pedigree = pedigree    
    }

    somar(a: number, b: number):number {
        return a + b
    }
}




//Objeto é uma instância de uma classe

let c = new cachorro("Mc Poze", "poodle", "preto", 10, 5, true, true, false);
let c2 = new cachorro("Justin Bieber", "Pastor Alemão", "preto", 5, 25, true, false, false);

console.log(c.nome);
console.log(c2.raca);