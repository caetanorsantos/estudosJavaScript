const luckNumber = (userNumber) => {
	const number = Math.floor(Math.random() * 10) + 1;

	return number === userNumber
		? `Congratulations! The number was ${number}`
		: `Sorry, the number was ${number}`;
};

console.log(luckNumber(5));
