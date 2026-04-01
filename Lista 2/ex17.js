const totalExpenses = (array) => {
	return array
		.map((item) => item.price)
		.reduce((accumulator, value) => accumulator + value)
		.toFixed(2);
};

const myExpenses = [
	{ name: 'Galaxy S20', category: 'Eletronics', price: 3599.99 },
	{ name: 'MacBook Pro', category: 'Notebooks', price: 30999.9 },
];
const myExpenses2 = [
	{ name: 'Online Journal', category: 'Subscriptions', price: 89.99 },
	{ name: 'Cinema', category: 'Entertainment', price: 150 },
];

console.log(totalExpenses(myExpenses));
console.log(totalExpenses(myExpenses2));
