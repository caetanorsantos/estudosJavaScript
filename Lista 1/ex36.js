const multiplicaCadaElementoPor = (vetor, numero) => {
	const resultado = [];
	numero = Number(numero);

	for (let numContidoNoVetor of vetor) {
		resultado.push(numContidoNoVetor * numero);
	}

	return resultado;
};

const multiplicaCadaElementoMaiorQue5Por = (vetor, numero) => {
	const resultado = [];
	numero = Number(numero);

	for (let numContidoNoVetor of vetor) {
		if (numContidoNoVetor > 5) resultado.push(numContidoNoVetor * numero);
	}

	return resultado;
};

const vetor = [1, 2, 3, 4, 5, 6, 7];

console.log(multiplicaCadaElementoPor(vetor, 2));
console.log(multiplicaCadaElementoMaiorQue5Por(vetor, 2));
