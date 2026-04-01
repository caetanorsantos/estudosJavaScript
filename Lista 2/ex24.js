const findAlike = (word, array) => {
	return array.filter((string) => string.includes(word));
};

const myArray = ['Programming', 'Mobile', 'Professional'];
const myArray2 = ['JavaScript', 'Java', 'C++'];

console.log(findAlike('Python', myArray2));
