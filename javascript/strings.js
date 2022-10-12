//Delimitação de Strings

const aspasSimples = 'Olá, mundo!'

const aspasDuplas = "Outra mensagem"

console.log(aspasSimples)
console.log(aspasDuplas)

//Caracteres de escape

const a = "Olá, eu sou o JavaScript.\nEu sou melhor que o Python" // usando \n quebra a linha

console.log(a)

const usandoCrases = `Estou usando crase 
para String`

console.log(usandoCrases)

// método das strings

const frase = 'O Javascript foi criado alguns anos após o Python. No entanto, o Javascript é bem mais bacana.'

console.log(frase.toUpperCase())
console.log(frase.concat(' Java é mais difícil'))
console.log(frase.substring(2,12))
console.log(frase.replace('Javascript', 'Rust')) //replace substitui a 1ª ocorrência da pesquisa 
console.log(frase.replaceAll('Javascript', 'Kotlin'))


const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>'))
console.log(html.endsWith('</html>'))

const msg = '                  Olá!   '
console.log(msg)
console.log(msg.trim())