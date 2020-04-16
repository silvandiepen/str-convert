"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
test('removeSpecialCharacters', () => {
    expect(string_1.removeSpecialCharacters('Some Variable')).toBe('Some Variable');
    expect(string_1.removeSpecialCharacters('^%#500px Variable')).toBe('500px Variable');
});
test('safeVariable', () => {
    expect(string_1.safeVariable('Some Variable')).toBe('SomeVariable');
    expect(string_1.safeVariable('500px Variable')).toBe('_500pxVariable');
});
//# sourceMappingURL=string.test.js.map