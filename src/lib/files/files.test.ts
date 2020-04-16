export {};
import { pathOnly, isDir, getExt } from './files';

test('pathOnly', () => {
	expect(pathOnly('Wooohoo/Testfolder/Somethingelse')).toBe(
		'Wooohoo/Testfolder/Somethingelse'
	);
	expect(pathOnly('Wooohoo/Testfolder/Somethingelse/test.jpg')).toBe(
		'Wooohoo/Testfolder/Somethingelse'
	);
});

test('isDir', () => {
	expect(isDir('Wooohoo/Testfolder/Somethingelse')).toBe(true);
	expect(isDir('Wooohoo/Testfolder/Somethingelse/test.jpg')).toBe(false);
});

test('getExt', () => {
	expect(getExt('Wooohoo/Testfolder/Somethingelse')).toBe('');
	expect(getExt('Wooohoo/Testfolder/Somethingelse/test.jpg')).toBe('.jpg');
	expect(getExt('Wooohoo/Testfolder/Somethingelse/test.jpg.template')).toBe(
		'.jpg'
	);
});
