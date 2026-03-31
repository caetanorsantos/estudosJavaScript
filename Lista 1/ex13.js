const isDiaUtil = (dia) => {
	switch (Number(dia)) {
		case 1:
			console.log('Domingo : Fim de Semana');
			break;
		case 2:
			console.log('Segunda-feira : Dia Útil');
			break;
		case 3:
			console.log('Terça-feira : Dia Útil');
			break;
		case 4:
			console.log('Quarta-feira : Dia Útil');
			break;
		case 5:
			console.log('Quinta-feira : Dia Útil');
			break;
		case 6:
			console.log('Sexta-feira : Dia Útil');
			break;
		case 7:
			console.log('Sábado : Fim de Semana');
			break;
		default:
			console.log('Número inválido');
	}
};

isDiaUtil(8);
isDiaUtil(6);
isDiaUtil(1);
isDiaUtil(2);
isDiaUtil(7);
