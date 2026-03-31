const triangulo = (ladoA, ladoB, ladoC) => {
	console.log(`Lado A : ${ladoA}`);
	console.log(`Lado B : ${ladoB}`);
	console.log(`Lado C : ${ladoC}`);

	if (Number(ladoA) == Number(ladoB) && Number(ladoA) == Number(ladoC)) console.log('Classificação : Equilátero');
	else if (Number(ladoA) != Number(ladoB) && Number(ladoA) != Number(ladoC) && Number(ladoB) != Number(ladoC)) console.log('Classificação : Escaleno');
	else console.log('Classificação : Isósceles');
};

triangulo(12, 12, 12);
triangulo(12, 12, 10);
triangulo(10, 12, 12);
triangulo(12, 11, 10);
triangulo(10, 11, 10);
triangulo(10, 11, 12);
