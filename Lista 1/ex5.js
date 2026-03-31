const formata = (valor) => {
	let valorFormatado = valor.toFixed(2).replace('.', ',');

	return `R$ ${valorFormatado}`;
};

console.log(formata(0.1 + 0.2));
