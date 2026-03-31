const maiorEMenor = (vetor) => {
	let maior, menor;

	for (let i = 0; i < vetor.length; i++) {
		const atual = Number(vetor[i]);

		if (i === 0) maior = menor = atual;
		else {
			if (atual > maior) maior = atual;
			if (atual < menor) menor = atual;
		}
	}

	console.log(`Menor Número : ${menor}`);
	console.log(`Maior Número : ${maior}`);
};

const numeros = [1, 2, 10, 0, 15, 20, 21];

maiorEMenor(numeros);
