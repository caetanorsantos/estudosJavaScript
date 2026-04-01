const simpleAverage = (array) => {
	return (
		array.reduce((accumulator, value) => accumulator + value) / array.length
	);
};

const myArray = [0, 10];
const myArray2 = [1, 2, 3, 4, 5];

console.log(simpleAverage(myArray));
console.log(simpleAverage(myArray2));
