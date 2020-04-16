"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
test('lowercase', () => {
    expect(_1.lowerCase('Wooohoo')).toBe('wooohoo');
    expect(_1.lowerCase('THIS IS ALL UPPERCASE')).toBe('this is all uppercase');
    expect(_1.lowerCase('Wooohoo 243')).toBe('wooohoo 243');
});
test('PascalCase', () => {
    expect(_1.pascalCase('Wooohoo')).toBe('Wooohoo');
    expect(_1.pascalCase('Some random string')).toBe('SomeRandomString');
    expect(_1.pascalCase('THIS IS ALL UPPERCASE')).toBe('ThisIsAllUppercase');
});
test('camelCase', () => {
    expect(_1.camelCase('Wooohoo')).toBe('wooohoo');
    expect(_1.camelCase('Some random string')).toBe('someRandomString');
    expect(_1.camelCase('THIS IS ALL UPPERCASE')).toBe('thisIsAllUppercase');
});
test('kebabCase', () => {
    expect(_1.kebabCase('Wooohoo')).toBe('wooohoo');
    expect(_1.kebabCase('Some random string')).toBe('some-random-string');
    expect(_1.kebabCase('THIS IS ALL UPPERCASE')).toBe('this-is-all-uppercase');
});
test('snake_case', () => {
    expect(_1.snakeCase('Wooohoo')).toBe('wooohoo');
    expect(_1.snakeCase('Some random string')).toBe('some_random_string');
    expect(_1.snakeCase('THIS IS ALL UPPERCASE')).toBe('this_is_all_uppercase');
});
//# sourceMappingURL=case.test.js.map