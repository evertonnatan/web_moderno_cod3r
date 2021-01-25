//dentro do JS há o infinity
console.log(7 / 0)

//diferente do python, o JS lê o que há dentro das aspas
console.log('10' / 2)

//mas cuidado, no caso abaixo ele concatenará
console.log("3" + 2)

//diferente do python, o JS não multiplica strings
console.log("Show!" * 2)

//o JS gera algumas imprecisões
console.log(0.1 + 1.7)

//o JS não converte, diretamente, números para strings. No caso abaixo geraraia um erro
//console.log(10.toString())

//No entanto, se o número estiver dentro de parenteses, é possível a conversão
console.log((10.345).toString)
