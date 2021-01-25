const pessoa = {
    nome: "Kakashi",
    idade: 34,
    peso: 70
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '20/06/1991'
})
pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const destino = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 4} // o "a" será sobrescrito
const objFinal = Object.assign(destino, obj1, obj2)

Object.freeze(objFinal)
objFinal.c = 1234
console.log(objFinal)
