const calculateSalary = (workedHours, salaryPerHour) => {
	const calculatedSalary = workedHours * salaryPerHour;
	return `Salário igual a R$ ${calculatedSalary.toFixed(2).replace('.', ',')}`;
};

console.log(calculateSalary(150, 40.5));
