const filterNumbers = (array) => {
	return array.filter((item) => typeof item === 'number');
};

const myArray = ['JavaScript', 1, '3', 'Web', 20];

console.log(filterNumbers(myArray));
