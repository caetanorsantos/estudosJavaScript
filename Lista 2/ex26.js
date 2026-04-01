const invertValueAndKey = (obj) => {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [value, key]),
	);
};

const myObj = { a: 1, b: 2, c: 3 };

console.log(myObj);
console.log(invertValueAndKey(myObj));
