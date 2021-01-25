// IIFE -> Immediately Invoked Function Expression
// função autoinvocada: usada, geralmente, quando se deseja fugir do escopo global

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
}) ()