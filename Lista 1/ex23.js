const prompt = require('prompt-sync')();

const imprimeAluno = (aluno) => {
	console.log(`Aluno : ${aluno.nome}`);
	console.log(`Código do aluno : ${aluno.codigo}`);
	console.log(`Nota 1 : ${aluno.nota1.toFixed(2)}`);
	console.log(`Nota 2 : ${aluno.nota2.toFixed(2)}`);
	console.log(`Nota 3 : ${aluno.nota3.toFixed(2)}`);
	console.log(`Média : ${aluno.media.toFixed(2)}`);
	console.log(aluno.media >= 5 ? 'Aprovado' : 'Reprovado');
};

const leAluno = (aluno) => {
	aluno.nota1 = Number(aluno.nota1);
	aluno.nota2 = Number(aluno.nota2);
	aluno.nota3 = Number(aluno.nota3);

	aluno.media = (aluno.nota1 * 4 + aluno.nota2 * 3 + aluno.nota3 * 3) / 10;

	imprimeAluno(aluno);
};

const adicionaAluno = () => {
	while (true) {
		let aluno = {};

		aluno.codigo = parseInt(prompt('Digite o codigo do aluno :'));

		if (aluno.codigo < 0) break;

		aluno.nome = prompt('Digite o nome do aluno :');
		aluno.nota1 = parseFloat(prompt('Digite a nota 1 do aluno :'));
		aluno.nota2 = parseFloat(prompt('Digite a nota 2 do aluno :'));
		aluno.nota3 = parseFloat(prompt('Digite a nota 3 do aluno :'));

		leAluno(aluno);
	}
};

const caetano = {
	nome: 'Caetano Santos',
	codigo: 1,
	nota1: 9.5,
	nota2: 10,
	nota3: 0.5,
};

leAluno(caetano);

adicionaAluno();
