"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
exports.pathOnly = function (str) {
    var destDir = str;
    var destArray = str.split('/');
    if (destArray[destArray.length - 1].includes('.')) {
        destArray.pop();
        destDir = destArray.join('/');
    }
    return destDir;
};
exports.isDir = function (dir) {
    return path_1.default.extname(path_1.default.basename(dir)) ? false : true;
};
exports.getExt = function (file) {
    return path_1.default.extname(file.replace('.template', ''));
};
