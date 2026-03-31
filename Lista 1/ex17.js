const aumento = ({ nome, plano, salario }) => {
	salario = Number(salario);
	console.log(`Funcionário : ${nome}`);
	console.log(`Salário Antigo : ${salario.toFixed(2)}`);

	switch (plano) {
		case 'A':
			salario *= 1.1;
			break;
		case 'B':
			salario *= 1.2;
			break;
		case 'C':
			salario *= 1.3;
			break;
		default:
			console.log('Plano Inválido');
			break;
	}

	console.log(`Salário Novo : ${salario.toFixed(2)}`);
};

const caetano = {
	nome: 'Caetano Santos',
	plano: 'C',
	salario: 5399,
};

aumento(caetano);
