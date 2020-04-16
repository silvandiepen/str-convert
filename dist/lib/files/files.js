"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.pathOnly = (str) => {
    let destDir = str;
    const destArray = str.split('/');
    if (destArray[destArray.length - 1].includes('.')) {
        destArray.pop();
        destDir = destArray.join('/');
    }
    return destDir;
};
exports.isDir = (dir) => {
    return path_1.default.extname(path_1.default.basename(dir)) ? false : true;
};
exports.getExt = (file) => {
    return path_1.default.extname(file.replace('.template', ''));
};
//# sourceMappingURL=files.js.map