// Cadeia de protótipos (prototype chain)

const avo = { attr1: "A"};
const pai = { __proto__: avo, attr2: "B"};
const filho = {__proto__: pai, attr3: "C"};

// chamando o atributo 1, o v8 irá buscar no filho. Não encontrando, ele irá buscar nos predecessores
console.log(filho.attr1)