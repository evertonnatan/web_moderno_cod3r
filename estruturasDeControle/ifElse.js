const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(4)
//cuidado com strings!! 
//no caso abaixo, não gerará erro, mas o JS intrerpretará como "false"
imprimirResultado('Epa')
