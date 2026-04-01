const secondHighest = (array) => {
	const uniqueValues = [...new Set(array)]; // ignore doubled values
	const sortedArray = uniqueValues.sort((a, b) => a - b); // sort the array
	return sortedArray[sortedArray.length - 2]; // returns the penultimate value (a.k.a. second highest)
};

const myArray = [1, 4, 2, 3, 4];
console.log(secondHighest(myArray));
