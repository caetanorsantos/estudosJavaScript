const statusAlunos = (notas) => {
	notas.forEach((nota) => {
		if (nota < 40) {
			console.log(`Reprovado \nNota : ${nota}`);
		} else {
			nota = arredondarNota(nota);
			console.log(`Aprovado \nNota : ${nota}`);
		}
	});
};

const arredondarNota = (nota) => {
	let multiploMaisProximo = Math.round(nota / 5) * 5;

	// Math.abs == Módulo matématico ( | x | )
	let diferenca = Math.abs(multiploMaisProximo - nota);

	if (diferenca < 3) {
		return multiploMaisProximo;
	} else {
		return nota;
	}
};

const notas = [99, 78, 77, 38, 37, 29];
statusAlunos(notas);
