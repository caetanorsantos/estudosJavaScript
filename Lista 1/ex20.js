const cedulas = (valor) => {
	valorLocal = Number(valor);
	let notas1 = 0,
		notas5 = 0,
		notas10 = 0,
		notas20 = 0,
		notas50 = 0,
		notas100 = 0;

	while (valorLocal > 99) {
		notas100 += 1;
		valorLocal -= 100;
	}

	while (valorLocal > 49) {
		notas50 += 1;
		valorLocal -= 50;
	}

	while (valorLocal > 19) {
		notas20 += 1;
		valorLocal -= 20;
	}

	while (valorLocal > 9) {
		notas10 += 1;
		valorLocal -= 10;
	}

	while (valorLocal > 4) {
		notas5 += 1;
		valorLocal -= 5;
	}

	while (valorLocal > 0) {
		notas1 += 1;
		valorLocal -= 1;
	}

	if (notas100) console.log(`Nota(s) de 100 : ${notas100}`);
	if (notas50) console.log(`Nota(s) de 50 : ${notas50}`);
	if (notas20) console.log(`Nota(s) de 20 : ${notas20}`);
	if (notas10) console.log(`Nota(s) de 10 : ${notas10}`);
	if (notas5) console.log(`Nota(s) de 5 : ${notas5}`);
	if (notas1) console.log(`Nota(s) de 1 : ${notas1}`);
};

cedulas(488);
