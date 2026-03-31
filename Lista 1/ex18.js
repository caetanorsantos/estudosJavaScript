const numeroPorExtenso = (num) => {
	switch (Number(num)) {
		case 1:
			console.log('Um');
			break;
		case 2:
			console.log('Dois');
			break;
		case 3:
			console.log('Três');
			break;
		case 4:
			console.log('Quatro');
			break;
		case 5:
			console.log('Cinco');
			break;
		case 6:
			console.log('Seis');
			break;
		case 7:
			console.log('Sete');
			break;
		case 8:
			console.log('Oito');
			break;
		case 9:
			console.log('Nove');
			break;
		case 10:
			console.log('Dez');
			break;
		default:
			console.log('Número fora do intervalo');
	}
};

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

numeros.forEach((numero) => {
	numeroPorExtenso(numero);
});
