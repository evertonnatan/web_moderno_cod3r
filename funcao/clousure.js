// Clousure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação:

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}


// Qual será a saída??
// 'Global' ou 'Local'??
const minhaFuncao = fora()
console.log(minhaFuncao())
