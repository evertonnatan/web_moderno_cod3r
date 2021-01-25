const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 *peso2
const media = total / (peso1 + peso2)

console.log(media)
//para fixar em 2 casas decimais, basta usar a função toFixed:
console.log(media.toFixed(2))

//Para converter um valor númerico em uma string, basta usar a função toString:
console.log(media.toString())

//Para converter um valor númerico em um binário, basta usar a função toString com o número 2 dentro dos parentèses:
console.log(media.toString(2))

//Number (com 'n' maiúsculo é uma função) e number (com 'n' minúsculo) é o tipo do dado
console.log(typeof media)
console.log(typeof Number)


