"use strict";
// tipagem no typescript
// tipagem implícita
let username = "sholin_matador_de_porco";
username = "flavioDoPneu";
// tipagem explícita
let pi = 3.1415;
pi = 10;
let logado = true;
logado = false;
// union types
let rg = 12345678910;
rg = '12345678910';
// tipo any (qualquer coisa)
let generico = [];
generico = {
    a: '',
    b: 1,
    c: true,
};
generico = 'Olá';
generico = 12314;
//tipagem de array
const listaDeNomes = ['José', 'Maria', 'João'];
listaDeNomes.push('Paulo');
const listaDeNumeros = [101, 23, 69];
const valores = ['José', 123];
