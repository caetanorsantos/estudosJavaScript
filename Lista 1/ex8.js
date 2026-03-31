const recorde = (jogos) => {
	let jogosArray = jogos.split(' ');
	let recordePontos,
		quantidadeVezesBateuRecorde = 0,
		menorQuantidadePontos,
		indicePiorJogo;

	jogosArray.forEach((pontos, indice) => {
		if (indice == 0) {
			recordePontos = Number(pontos);
			menorQuantidadePontos = Number(pontos);
			indicePiorJogo = indice + 1;
		}

		if (Number(pontos) > recordePontos) {
			quantidadeVezesBateuRecorde++;
			recordePontos = Number(pontos);
		}

		if (Number(pontos) < menorQuantidadePontos) {
			indicePiorJogo = indice + 1;
			menorQuantidadePontos = Number(pontos);
		}
	});

	let resultado = [quantidadeVezesBateuRecorde, indicePiorJogo];
	return resultado;
};

console.log(recorde('10 20 20 8 25 3 0 30 1'));
