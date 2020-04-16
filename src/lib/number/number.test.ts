export {};
const { bound, isPercentage, between, toRoundNumber } = require('./');

test('Bound', () => {
	expect(bound(100, 50)).toBe(1);
	expect(bound(25, 50)).toBe(0.5);
	expect(bound(-100, 50)).toBe(0);
});

test('isPercentage', () => {
	expect(isPercentage('100')).toBe(false);
	expect(isPercentage(1)).toBe(false);
	expect(isPercentage('25')).toBe(false);
	expect(isPercentage('10%')).toBe(true);
	expect(isPercentage('2000%')).toBe(true);
	expect(isPercentage('1.25%')).toBe(true);
});

test('Between', () => {
	expect(between(100, 0, 200)).toBe(true);
	expect(between(100, 0, 100)).toBe(false);
	expect(between(100, 0, 100, true)).toBe(true);
	expect(between(0, 0, 100, true)).toBe(true);
	expect(between(0, 0, 100)).toBe(false);
});

test('toRoundNumber', () => {
	expect(toRoundNumber(100.34343242)).toBe('100');
	expect(toRoundNumber(100.74343242)).toBe('101');
	expect(toRoundNumber(100.34643242, 2)).toBe('100.35');
	expect(toRoundNumber(100.74343242, 2)).toBe('100.74');
});
