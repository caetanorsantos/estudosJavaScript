const sum = (array) => {
	return array.reduce((accumulator, value) => accumulator + value);
};

console.log(sum([15, 15, 15, 15]));
