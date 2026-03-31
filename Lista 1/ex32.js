const mediaAritmetica = (vetor) => {
	let somatorio = 0;

	for (let i = 0; i < vetor.length; i++) {
		const atual = Number(vetor[i]);

		somatorio += atual;
	}

	return somatorio / vetor.length;
};

console.log(`Média Aritmética : ${mediaAritmetica([-1, 0, -20, 10, 15, 12, -2])}`);
