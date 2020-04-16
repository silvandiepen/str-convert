"use strict";
// LowerCase
// ex; MyValue > myvalue
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowerCase = (str = '') => {
    return str.toLowerCase();
};
// PascalCase
// ex; my value > MyValue
exports.pascalCase = (str = '') => {
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '$')
        .replace(/[^A-Za-z0-9]+/g, '$')
        .replace(/([a-z])([A-Z])/g, (m, a, b) => a + '$' + b)
        .toLowerCase()
        .replace(/(\$)(\w?)/g, (m, a, b) => b.toUpperCase());
};
// camelCase
// ex; my value > myValue
exports.camelCase = (str = '') => {
    if (!str)
        return '';
    return String(exports.pascalCase(str).charAt(0).toLowerCase() + exports.pascalCase(str).slice(1));
};
// kebabCase
// ex; my value > my-value
exports.kebabCase = (str = '') => str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('-');
// snakeCase
// ex; my value > my_value
exports.snakeCase = (str = '') => str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('_');
//# sourceMappingURL=case.js.map