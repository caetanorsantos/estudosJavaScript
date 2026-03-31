const criancas = (crianca1, crianca2) => {
	crianca1.altura = Number(crianca1.altura);
	crianca2.altura = Number(crianca2.altura);
	crianca1.taxaDeCrescimentoAnual = Number(crianca1.taxaDeCrescimentoAnual);
	crianca2.taxaDeCrescimentoAnual = Number(crianca2.taxaDeCrescimentoAnual);

	let diferencaAltura = crianca1.altura - crianca2.altura,
		criancaMaior = {},
		criancaMenor = {},
		anos = 0;

	if (diferencaAltura === 0) console.log('As crianças tem a mesma altura');
	else if (diferencaAltura > 0) {
		criancaMaior = crianca1;
		criancaMenor = crianca2;
	} else {
		criancaMaior = crianca2;
		criancaMenor = crianca1;
	}

	if (criancaMaior.taxaDeCrescimentoAnual > criancaMenor.taxaDeCrescimentoAnual) console.log('A criança maior tem uma taxa de crescimento maior, então a criança menor não ultrapassará sua altura');
	else {
		while (criancaMenor.altura < criancaMaior.altura) {
			criancaMenor.altura += criancaMenor.taxaDeCrescimentoAnual;
			criancaMaior.altura += criancaMaior.taxaDeCrescimentoAnual;
			anos++;
		}
		console.log(`A criança menor ultrapassará a maior em ${anos} anos`);
	}
};

const juninho = {
	nome: 'Junior',
	altura: 120,
	taxaDeCrescimentoAnual: 5,
};

const enzo = {
	nome: 'Enzo',
	altura: 140,
	taxaDeCrescimentoAnual: 2,
};

criancas(juninho, enzo);
