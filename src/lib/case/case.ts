// LowerCase
// ex; MyValue > myvalue

export const lowerCase = (str: string = ''): string => {
	return str.toLowerCase();
};

// PascalCase
// ex; my value > MyValue

export const pascalCase = (str: string = ''): string => {
	if (!str) return '';
	return String(str)
		.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '$')
		.replace(/[^A-Za-z0-9]+/g, '$')
		.replace(/([a-z])([A-Z])/g, (m, a, b) => a + '$' + b)
		.toLowerCase()
		.replace(/(\$)(\w?)/g, (m, a, b) => b.toUpperCase());
};

// camelCase
// ex; my value > myValue

export const camelCase = (str: string = ''): string => {
	if (!str) return '';

	return String(
		pascalCase(str).charAt(0).toLowerCase() + pascalCase(str).slice(1)
	);
};

// kebabCase
// ex; my value > my-value

export const kebabCase = (str: string = ''): string =>
	str &&
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map((x) => x.toLowerCase())
		.join('-');

// snakeCase
// ex; my value > my_value

export const snakeCase = (str: string = ''): string =>
	str &&
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map((x) => x.toLowerCase())
		.join('_');
