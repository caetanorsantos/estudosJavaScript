const bestStudent = (students) => {
	// students must be an object

	return Object.entries(students).reduce((best, [name, grades]) => {
		const average =
			grades.reduce((accumulator, grade) => accumulator + grade) /
			grades.length;

		if (!best || average > best.average) return { name, average };
		return best;
	}, null);
};

const myStudents = {
	Otavio: [8, 7.6, 8.9, 6],
	Caetano: [9, 6.6, 7.9, 8],
	Branca: [7, 7, 8, 9],
};

console.log(bestStudent(myStudents));
