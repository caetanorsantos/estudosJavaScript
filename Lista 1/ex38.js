const printAllOdds = (start = 0, end = 100) => {
	start = Number(start);
	end = Number(end);

	if (start > end) [start, end] = [end, start];

	for (let i = start; i <= end; i++) {
		if (i % 2 !== 0) console.log(i);
	}
};

printAllOdds(100, 0);
printAllOdds();
