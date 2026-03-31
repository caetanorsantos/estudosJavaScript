const todosParesAte = (numero) => {
	let cont = 0;
	while (cont < numero) {
		cont++;
		if (cont % 2 === 0) console.log(cont);
	}
};

todosParesAte(200);
