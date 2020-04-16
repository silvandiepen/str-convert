export {};
import { lowerCase, pascalCase, camelCase, kebabCase, snakeCase } from './';

test('lowercase', () => {
	expect(lowerCase('Wooohoo')).toBe('wooohoo');
	expect(lowerCase('THIS IS ALL UPPERCASE')).toBe('this is all uppercase');
	expect(lowerCase('Wooohoo 243')).toBe('wooohoo 243');
});

test('PascalCase', () => {
	expect(pascalCase('Wooohoo')).toBe('Wooohoo');
	expect(pascalCase('Some random string')).toBe('SomeRandomString');
	expect(pascalCase('THIS IS ALL UPPERCASE')).toBe('ThisIsAllUppercase');
});

test('camelCase', () => {
	expect(camelCase('Wooohoo')).toBe('wooohoo');
	expect(camelCase('Some random string')).toBe('someRandomString');
	expect(camelCase('THIS IS ALL UPPERCASE')).toBe('thisIsAllUppercase');
});
test('kebabCase', () => {
	expect(kebabCase('Wooohoo')).toBe('wooohoo');
	expect(kebabCase('Some random string')).toBe('some-random-string');
	expect(kebabCase('THIS IS ALL UPPERCASE')).toBe('this-is-all-uppercase');
});
test('snake_case', () => {
	expect(snakeCase('Wooohoo')).toBe('wooohoo');
	expect(snakeCase('Some random string')).toBe('some_random_string');
	expect(snakeCase('THIS IS ALL UPPERCASE')).toBe('this_is_all_uppercase');
});
