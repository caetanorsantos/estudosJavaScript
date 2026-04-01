const inverse = (value) => {
	if (typeof value === 'boolean') return !value;

	if (typeof value === 'number') return -value;

	return `Boolean or Number expected, but the type of the parameter is ${typeof value}`;
};

console.log(inverse('c'));
