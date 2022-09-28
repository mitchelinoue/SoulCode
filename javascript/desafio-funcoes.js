/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */

function equacaoSeg (a = 0, b = 0, c = 0){
    let res1 = (- b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a)
    let res2 = (- b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a)
    let resultado = `O resultado é ${Number(res1)} e ${Number(res2)}`
    return resultado
}

console.log(equacaoSeg(1, -1, -12))