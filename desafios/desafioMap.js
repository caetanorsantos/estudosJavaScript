const carrinho = ['{ "nome": "Borracha", "preco": 3.45 }', '{ "nome": "Caderno", "preco": 13.90 }', '{ "nome": "Kit de Lápis", "preco": 41.22 }', '{ "nome": "Caneta", "preco": 7.50 }'];

// Retornar array apenas com os precos

const stringToObj = (json) => {
	const obj = JSON.parse(json);
	return obj;
};

const returnPrice = (obj) => {
	return `R$ ${obj.preco.toFixed(2).replace('.', ',')}`;
};

const precos = carrinho.map(stringToObj).map(returnPrice);
console.log(precos);
