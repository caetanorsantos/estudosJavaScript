const objToArray = (obj) => {
	return Object.entries(obj);
};

console.log(
	objToArray({ nome: 'Maria', profissao: 'Desenvolvedora de software' }),
);
