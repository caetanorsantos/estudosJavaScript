const revenda = (fruta) => {
	switch (fruta) {
		case 'Hatch':
			console.log('Compra efetuada com sucesso');
			break;
		case 'Sedan':
			console.log('Tem certeza que não prefere este modelo?');
			break;
		case 'Moto':
			console.log('Tem certeza que não prefere este modelo?');
			break;
		case 'Caminhonete':
			console.log('Tem certeza que não prefere este modelo?');
			break;
		default:
			console.log('Não trabalhamos com este tipo de automóvel aqui');
			break;
	}
};

const carros = ['Hatch', 'Sedan', 'Moto', 'Caminhonete', 'Banana'];

carros.forEach((fruta) => {
	revenda(fruta);
});
