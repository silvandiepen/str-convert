"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var files_1 = require("./files");
test('pathOnly', function () {
    expect(files_1.pathOnly('Wooohoo/Testfolder/Somethingelse')).toBe('Wooohoo/Testfolder/Somethingelse');
    expect(files_1.pathOnly('Wooohoo/Testfolder/Somethingelse/test.jpg')).toBe('Wooohoo/Testfolder/Somethingelse');
});
test('isDir', function () {
    expect(files_1.isDir('Wooohoo/Testfolder/Somethingelse')).toBe(true);
    expect(files_1.isDir('Wooohoo/Testfolder/Somethingelse/test.jpg')).toBe(false);
});
test('getExt', function () {
    expect(files_1.getExt('Wooohoo/Testfolder/Somethingelse')).toBe('');
    expect(files_1.getExt('Wooohoo/Testfolder/Somethingelse/test.jpg')).toBe('.jpg');
    expect(files_1.getExt('Wooohoo/Testfolder/Somethingelse/test.jpg.template')).toBe('.jpg');
});
