const isDivisivelPor3 = (numero) => {
	return Number(numero) % 3 == 0;
};

console.log(isDivisivelPor3(3));
console.log(isDivisivelPor3(6));
console.log(isDivisivelPor3(5));
console.log(isDivisivelPor3(90));
console.log(isDivisivelPor3(91));
