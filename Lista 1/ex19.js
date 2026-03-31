const calculaPedido = (pedido) => {
	pedido.codigoProduto = Number(pedido.codigoProduto);
	pedido.quantidade = Number(pedido.quantidade);

	const cardapio = {
		100: 3,
		200: 4,
		300: 5.5,
		400: 7.5,
		500: 3.5,
		600: 2.8,
	};

	return (cardapio[pedido.codigoProduto] * pedido.quantidade).toFixed(2);
};

const pedido = {
	nome: 'Caetano',
	produto: 'Xis Bauru',
	codigoProduto: 700,
	quantidade: 4,
};

console.log(calculaPedido(pedido));

// era para usar Switch, mas quis testar uma abordagem diferente, por isso não há caso default
