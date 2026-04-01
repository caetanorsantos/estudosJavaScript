const isBetween = (target, min, max, isInclusive = false) => {
	return isInclusive
		? target >= min && target <= max
		: target > min && target < max;
};
