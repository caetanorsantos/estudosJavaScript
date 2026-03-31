const vetorInteiro = [10, 20, 30, 40];
const vetorString = ['Cão', 'Gato', 'Peixe', 'Pássaro'];
const vetorDouble = [1.5, 2.75, 3.14, 9.99];

const uniao1 = vetorInteiro.concat(vetorString).concat(vetorDouble);

console.log('Resultado da Maneira 1 (Encadeamento):');
console.log(uniao1);

const uniao2 = vetorInteiro.concat(vetorString, vetorDouble);

console.log('Resultado da Maneira 2 (Múltiplos Argumentos):');
console.log(uniao2);
