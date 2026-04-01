const filterByDigitNumber = (array, digitNumber) => {
	return array.filter((number) => {
		return Math.abs(number).toString().length === digitNumber;
	});
};

const myArray = [38, 2, 365, 10, 125, 11, -10];

console.log(filterByDigitNumber(myArray, 2));
