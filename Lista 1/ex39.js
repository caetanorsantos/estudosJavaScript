const arraySwap = (array1, array2) => {
	for (let i = 0; i < array1.length; i++) {
		[array1[i], array2[i]] = [array2[i], array1[i]];
	}
};

const a = [1, 2, 3, 4];
const b = [10, 20, 30, 40];

console.log(a);
console.log(b);

arraySwap(a, b);
console.log();

console.log(a);
console.log(b);
