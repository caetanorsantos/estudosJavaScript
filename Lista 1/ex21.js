const valorASerPago = (idade) => {
	idade = Number(idade);
	if (idade < 10) adicional = 80;
	else if (idade >= 10 && idade <= 30) adicional = 50;
	else if (idade > 30 && idade <= 60) adicional = 95;
	else adicional = 130;

	return 100 + adicional;
};

const caetano = {
	nome: 'Caetano Santos',
	idade: 20,
};

console.log(`Nome : ${caetano.nome}\nValor a ser pago : ${valorASerPago(caetano.idade)}`);
