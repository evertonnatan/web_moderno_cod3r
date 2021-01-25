const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
// o método 'pop' exclui o último elemento de um array
pilotos.pop()
console.log(pilotos)

// o método "push" acrescenta um elemento ao array, na última posição 
pilotos.push('Verstappen')
console.log(pilotos)

// o método "shift" exclui o primeiro elemento de um array
pilotos.shift()
console.log(pilotos)

// o método "unshift" acrescenta um elemento ao array, na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// o método "splice" pode adicionar ou remover elementos de um array

// Adicionando:
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Removendo:
pilotos.splice(3, 1)
console.log(pilotos)

// o método "slice" gera um novo array com pedaços de um array existente
const algunsPilotos = pilotos.slice(2) // vai gerar um novo array a partir do índice 2 de pilotos
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // vai gerar um novo array a partir do índice 1, até o índice 4 de pilotos, exluindo este último
console.log(algunsPilotos2)
