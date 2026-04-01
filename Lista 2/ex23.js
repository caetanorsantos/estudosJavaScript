const countChars = (char, string) => {
	let count = 0;

	for (const c of string) {
		if (c === char) count++;
	}

	return count;
};

const myString = 'Banana';

console.log(countChars('a', myString));
