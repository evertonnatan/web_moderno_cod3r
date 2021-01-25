//strings podem ser usadas, em javascript, com os símbolos de aspas simples, duplas e crase

const escola = 'cod3r'

//a função abaixo retornará o carctere de índice 4
console.log(escola.charAt(4))
//a função abaixo não retornará erro, apenas um vazio
console.log(escola.charAt(5))
//a função abaixo retornará o correspondente da tabela unicode
console.log(escola.charCodeAt(3))
//a função abaixo retornará o índice de pesquisa (na função)
console.log(escola.indexOf('3'))
//a função abaixo imprimirá na tela a partir do índice 1
console.log(escola.substring(1))
//a função abaixo imprimirá na tela do índice 0 ao 3, excluindo o 3
console.log(escola.substring(0, 3))
//a função abaixo realiza concatenações
console.log('ESCOLA' .concat(escola).concat("!"))
//a função abaixo substituirá o 3 pelo "e"
console.log(escola.replace(3, "e"))
