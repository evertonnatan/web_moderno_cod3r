let num1 = 1
let num2 = 2

//operador unário de incremento
num1++
console.log(num1)

// operador unário de decremento (tem precedência sobre o de incremento)
--num1
console.log(num1)

//testando
console.log(++num1 === num2--)
console.log(num1 === num2)