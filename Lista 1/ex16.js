const calculadora = (a, operacao, b) => {
	switch (operacao) {
		case '+':
			return Number(a) + Number(b);
		case '-':
			return Number(a) - Number(b);
		case '*':
			return Number(a) * Number(b);
		case '/':
			return Number(a) / Number(b);
		default:
			return 'Operação Inválida';
	}
};

console.log(calculadora(1, '+', 2));
console.log(calculadora(1, '-', 2));
console.log(calculadora(1, '*', 2));
console.log(calculadora(1, '/', 2));
