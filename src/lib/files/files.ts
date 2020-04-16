import path from 'path';

export const pathOnly = (str: string): string => {
	let destDir = str;
	const destArray = str.split('/');
	if (destArray[destArray.length - 1].includes('.')) {
		destArray.pop();
		destDir = destArray.join('/');
	}
	return destDir;
};

export const isDir = (dir: string): boolean => {
	return path.extname(path.basename(dir)) ? false : true;
};

export const getExt = (file: string): string => {
	return path.extname(file.replace('.template', ''));
};
