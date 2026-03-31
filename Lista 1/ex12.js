const fatorial = (numero) => {
	if (Number(numero) <= 1) return 1;
	return Number(numero) * fatorial(Number(numero) - 1);
};

console.log(fatorial(6));
