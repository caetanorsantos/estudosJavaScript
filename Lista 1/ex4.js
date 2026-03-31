const divisao = (dividendo, divisor) => {
	const resto = dividendo % divisor;
	console.log(`Resultado : ${(dividendo / divisor).toFixed(0)}`);
	console.log(`Resto : ${resto}`);
};

divisao(5, 2);
