"use strict";
// isPercentage
// ex; 10% > true
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPercentage = (n) => {
    return typeof n === 'string' && n.indexOf('%') != -1;
};
// bound
// ex; max: 100; input: 120 > 100
// ex; max: 100; input: 80 > 80
// ex; max: 100; input: -10 > 0
exports.bound = (n, max) => {
    n = Math.min(max, Math.max(0, n));
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    return (n % max) / max;
};
// between
// ex; min: 0; max: 100; input: 50 > 0
exports.between = (number, min = 0, max = 100, inclusive = false) => {
    return inclusive
        ? number >= min && number <= max
        : number > min && number < max;
};
// toRoundNumber
// ex; 10.021929911 > 10.02
exports.toRoundNumber = (num, decimalPlaces = 0) => {
    return Number(Math.round(parseFloat(num + 'e' + decimalPlaces)) + 'e-' + decimalPlaces).toFixed(decimalPlaces);
};
//# sourceMappingURL=number.js.map