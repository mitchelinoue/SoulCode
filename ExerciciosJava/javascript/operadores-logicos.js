/*
Binário

0 -> Desligado(false)
1 -> Ligado(true)
*/

/*
 operador E (&&)

 V -> verdadeiro
 F -> falso

 V V -> V
 V F -> F
 F V -> F
 F F -> F
 */

 // média precisa ser maior ou igual a 7 E precisa ter, no mínimo, 80% de presença

 const media = (8 + 10 + 10) / 3
 const presenca = 0.8

 console.log(media >= 7 && presenca >= 0.8) //true

 /*
  operador OU (||)

  V V -> V
  F V -> V
  V F -> V
  F F -> F
  */

console.log(4 > 7 || 3 < 2) //false
console.log(5 > 3.5 || 7 > 8) //true

/*
operador NÃO(!)

NOT V -> F
NOT F -> V
*/

const resultado = 5 < 3 //false

console.log(!resultado) //true