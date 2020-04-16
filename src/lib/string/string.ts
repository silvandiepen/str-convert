// removeSpecialCharacters
// ex; my value #$#@ > value
export const removeSpecialCharacters = (str: string = ''): string =>
	str.replace(/[^\w\s]/gi, '');

// safeVariable
// ex; 500px > _500px

export const safeVariable = (str: string = ''): string => {
	str = removeSpecialCharacters(str).replace(/\s/g, '');
	if (!isNaN(parseInt(str.charAt(0), 0))) return `_${str}`;
	else return str;
};
