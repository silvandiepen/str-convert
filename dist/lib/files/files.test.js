"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const files_1 = require("./files");
test('pathOnly', () => {
    expect(files_1.pathOnly('Wooohoo/Testfolder/Somethingelse')).toBe('Wooohoo/Testfolder/Somethingelse');
    expect(files_1.pathOnly('Wooohoo/Testfolder/Somethingelse/test.jpg')).toBe('Wooohoo/Testfolder/Somethingelse');
});
test('isDir', () => {
    expect(files_1.isDir('Wooohoo/Testfolder/Somethingelse')).toBe(true);
    expect(files_1.isDir('Wooohoo/Testfolder/Somethingelse/test.jpg')).toBe(false);
});
test('getExt', () => {
    expect(files_1.getExt('Wooohoo/Testfolder/Somethingelse')).toBe('');
    expect(files_1.getExt('Wooohoo/Testfolder/Somethingelse/test.jpg')).toBe('.jpg');
    expect(files_1.getExt('Wooohoo/Testfolder/Somethingelse/test.jpg.template')).toBe('.jpg');
});
//# sourceMappingURL=files.test.js.map