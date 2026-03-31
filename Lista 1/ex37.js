const progressaoAritmetica = (termCount, a1, ratio) => {
	termCount = Number(termCount);
	a1 = Number(a1);
	ratio = Number(ratio);

	const terms = Array.from({ length: termCount }, (_, i) => a1 + ratio * i);

	// ARRAY.FROM: Cria e preenche um array de uma vez só.
	// Estrutura: .from({ length: tamanho }, (_, indice) => lógica)
	// 1. { length }: Define quantos itens o array terá.
	// 2. _ (underscore): Ignora o valor vazio do item.
	// 3. indice (i): Posição atual (0, 1, 2...) usada para o cálculo.

	const sum = terms.reduce((accumulator, item) => accumulator + item, 0);

	// Reduce: "Esmaga" o array em um único valor (ex: soma).
	// Estrutura: .reduce((acumulador, item_atual) => lógica, valor_inicial)
	// 1. acumulador: Resultado parcial que cresce a cada giro.
	// 2. item_atual: O número do array que está sendo somado agora.
	// 3. valor_inicial (0): Ponto de partida e proteção contra arrays vazios.

	console.log(`Resultado : ${terms.join(', ')}`);
	console.log(`Soma : ${sum}`);
};

const progressaoGeometrica = (termCount, a1, ratio) => {
	termCount = Number(termCount);
	a1 = Number(a1);
	ratio = Number(ratio);

	const terms = Array.from({ length: termCount }, (_, i) => a1 * ratio ** i);
	const sum = terms.reduce((accumulator, item) => accumulator + item, 0);

	console.log(`Resultado : ${terms.join(', ')}`);
	console.log(`Soma : ${sum}`);
};

progressaoAritmetica(5, 1, 2);
progressaoGeometrica(5, 1, 2);
