// isPercentage
// ex; 10% > true

export const isPercentage = (n: string): boolean => {
	return typeof n === 'string' && n.indexOf('%') != -1;
};

// bound
// ex; max: 100; input: 120 > 100
// ex; max: 100; input: 80 > 80
// ex; max: 100; input: -10 > 0

export const bound = (n: number, max: number): number => {
	n = Math.min(max, Math.max(0, n));

	if (Math.abs(n - max) < 0.000001) {
		return 1;
	}

	return (n % max) / max;
};

// between
// ex; min: 0; max: 100; input: 50 > 0

export const between = (
	number: number,
	min: number = 0,
	max: number = 100,
	inclusive: boolean = false
): boolean => {
	return inclusive
		? number >= min && number <= max
		: number > min && number < max;
};
// toRoundNumber
// ex; 10.021929911 > 10.02

export const toRoundNumber = (
	num: number,
	decimalPlaces: number = 0
): number | string => {
	return Number(
		Math.round(parseFloat(num + 'e' + decimalPlaces)) + 'e-' + decimalPlaces
	).toFixed(decimalPlaces);
};
