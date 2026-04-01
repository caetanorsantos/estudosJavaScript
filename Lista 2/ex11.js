const removeKey = (obj, key) => {
	const newObj = structuredClone(obj);
	delete newObj[key];
	return newObj;
};

const myObj = { a: 1, b: 2 };

console.log(removeKey(myObj, 'a'));

console.log(myObj);
