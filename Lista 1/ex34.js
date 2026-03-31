const compararCaracteres = (string1, string2) => {
	const setString1 = new Set(string1.toLowerCase());
	const setString2 = new Set(string2.toLowerCase());

	if (setString1.size !== setString2.size) return false;

	for (let char of setString1) {
		if (!setString2.has(char)) return false;
	}

	return true;
};

console.log(compararCaracteres('Amor', 'Roma'));
console.log(compararCaracteres('Opa', 'Pai'));
console.log(compararCaracteres('AABB', 'ab'));
