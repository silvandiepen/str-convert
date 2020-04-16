"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// removeSpecialCharacters
// ex; my value #$#@ > value
exports.removeSpecialCharacters = (str = '') => str.replace(/[^\w\s]/gi, '');
// safeVariable
// ex; 500px > _500px
exports.safeVariable = (str = '') => {
    str = exports.removeSpecialCharacters(str).replace(/\s/g, '');
    if (!isNaN(parseInt(str.charAt(0), 0)))
        return `_${str}`;
    else
        return str;
};
//# sourceMappingURL=string.js.map