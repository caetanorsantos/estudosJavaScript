const deleteVogals = (string) => {
	return string.replace(/[aeiou]/gi, '');

	// RegEx, means Regular Expression
	// [aeiou] -> What to search
	// g -> global (doesn't stop after finding the first appearance)
	// i -> case-insensitive (catches 'A' an 'a')
};

const myString = 'Cod3r';

console.log(deleteVogals(myString));
