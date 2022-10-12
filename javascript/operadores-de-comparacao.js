const msg = "Eu sou uma msg"
const msg2 = "Eu sou outra mensagem"

console.log(msg == msg2) //false

const num = 5
const num2 = 5

console.log(num == num2) //true

let a = 100
let b = "100"

console.log(a == b) //true
console.log( a === b) //false

console.log(a != b) //false
console.log(a !== b) //true

a = 56
b = 30
let c = 500
let d = 500

console.log(a > b) //true
console.log(c >= d) //true
