const jurosSimples = (capital, taxa, tempo) => {
	let juros = Number(capital) * (Number(taxa) / 100) * Number(tempo);

	return (capital + juros).toFixed(2);
};

const jurosCompostos = (capital, taxa, tempo) => {
	let montante = Number(capital) * (1 + Number(taxa) / 100) ** Number(tempo);

	return montante.toFixed(2);
};

console.log(jurosSimples(1000, 10, 3));
console.log(jurosCompostos(1000, 10, 3));
