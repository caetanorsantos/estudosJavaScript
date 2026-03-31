const jurosCompostos = (capital, taxa, tempo) => {
	let montante = Number(capital) * (1 + Number(taxa) / 100) ** Number(tempo);

	return montante.toFixed(2);
};

const anuidade = (mes, valor) => {
	mes = Number(mes);
	valor = Number(valor);
	atraso = mes - 1;
	if (atraso != 0) {
		console.log(`Anuidade atrasada a ${atraso} meses.\nValor a ser pago (com juros) : ${jurosCompostos(valor, 5, atraso)}`);
	} else {
		console.log('Anuidade em dia!');
	}
};

const valorAnuidade = 100;

anuidade(12, valorAnuidade);
