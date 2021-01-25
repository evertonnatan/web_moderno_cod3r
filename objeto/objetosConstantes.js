// pessoa aponta para um endereço na memória
// este endereço aponta para o objeto definido em "pessoa"
const pessoa = { nome: 'Levi'}

// alterando o atributo "nome" da constante "pessoa"
pessoa.nome = 'Eren'
console.log(pessoa)

// congelando os atributos do objeto: (a partir desta linha, não será possível alterar os atributos do objeto acima)

Object.freeze(pessoa)
