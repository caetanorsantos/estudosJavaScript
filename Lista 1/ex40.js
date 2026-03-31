const getGradeConcepts = (gradeList) => {
	return gradeList.map((grade) => {
		if (grade < 0 || grade > 10) return 'Invalid';

		if (grade <= 4.9) return 'D';
		if (grade <= 6.9) return 'C';
		if (grade <= 8.9) return 'B';
		return 'A';
	});
};

const studentGrades = [4.5, 7.2, 9.8, 6.0, 10, 11];
const concepts = getGradeConcepts(studentGrades);

console.table(concepts);
