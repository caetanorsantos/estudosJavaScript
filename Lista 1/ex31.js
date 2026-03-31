const quantosNegativos = (vetor) => {
	let quantidadeDeNegativos = 0;

	for (let i = 0; i < vetor.length; i++) {
		const atual = Number(vetor[i]);

		if (atual < 0) quantidadeDeNegativos++;
	}

	console.log(`Quantidade de negativos : ${quantidadeDeNegativos}`);
};

quantosNegativos([-1, 0, -20, 10, 15, 12, -2]);
