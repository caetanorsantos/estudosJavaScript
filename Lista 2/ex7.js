const multiplyWithoutOperator = (number1, number2) => {
	if (number1 === 0 || number2 === 0) return 0;

	let soma = 0;

	for (let i = 0; i < number1; i++) {
		soma += number2;
	}

	return soma;
};

console.log(multiplyWithoutOperator(7, 6));
