import { removeSpecialCharacters, safeVariable } from './string';

test('removeSpecialCharacters', () => {
	expect(removeSpecialCharacters('Some Variable')).toBe('Some Variable');
	expect(removeSpecialCharacters('^%#500px Variable')).toBe('500px Variable');
});

test('safeVariable', () => {
	expect(safeVariable('Some Variable')).toBe('SomeVariable');
	expect(safeVariable('500px Variable')).toBe('_500pxVariable');
});
