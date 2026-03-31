const bhaskara = (a, b, c) => {
	let delta = Number(b) ** 2 - 4 * Number(a) * Number(c);

	if (delta < 0) return 'Delta é negativo';

	let resultado = [];

	let x1 = (-Number(b) + Math.sqrt(delta)) / (2 * Number(a));
	resultado.push(x1);

	let x2 = (-Number(b) - Math.sqrt(delta)) / (2 * Number(a));
	resultado.push(x2);

	return resultado;
};

console.log(bhaskara(1, -5, 6));
console.log(bhaskara(1, 2, 5));
