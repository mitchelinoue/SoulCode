// tipagem no typescript



// tipagem implícita
let username = "sholin_matador_de_porco";
username = "flavioDoPneu";



// tipagem explícita
let pi : number = 3.1415;
pi = 10;
let logado: boolean = true;
logado = false;



// union types
let rg: number | string = 12345678910
rg = '12345678910'



// tipo any (qualquer coisa)
let generico: any = []
generico ={
    a:'',
    b:1,
    c:true,
}
generico = 'Olá'
generico = 12314



//tipagem de array
const listaDeNomes: string[] = ['José', 'Maria', 'João']
listaDeNomes.push('Paulo')

const listaDeNumeros: number[] = [101, 23, 69]

const valores: Array<string | number> = ['José', 123]


