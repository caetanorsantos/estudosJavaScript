const contaQuantosEntre10e20 = (vetor) => {
	let numeros = 0;

	for (let i = 0; i < vetor.length; i++) {
		if (Number(vetor[i]) >= 10 && Number(vetor[i]) <= 20) numeros++;
	}

	console.log(`Numeros dentro do intervalo [10, 20] : ${numeros}`);
};

const numeros = [1, 2, 10, 15, 20, 21];

contaQuantosEntre10e20(numeros);
