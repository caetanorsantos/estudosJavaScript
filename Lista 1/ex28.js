const quantosParesEImpares = (vetor) => {
	let pares = 0,
		impares = 0;

	for (let i = 0; i < vetor.length; i++) {
		Number(vetor[i]) % 2 === 0 ? pares++ : impares++;
	}

	console.log(`Números pares : ${pares}`);
	console.log(`Números ímpares : ${impares}`);
};

const numeros = [0, 1, 2, '3'];

quantosParesEImpares(numeros);
