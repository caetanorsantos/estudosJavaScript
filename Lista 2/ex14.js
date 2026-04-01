const evenNumbersWithEvenIndex = (array) => {
	return array.filter((item, index) => item % 2 === 0 && index % 2 === 0);
};

const myArray = [1, 2, 3, 4];
const myArray2 = [10, 70, 22, 43];

console.log(evenNumbersWithEvenIndex(myArray));
console.log(evenNumbersWithEvenIndex(myArray2));
