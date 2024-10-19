const separators = {
	'camel': '',
	'pascal': '',
	'snake': '_',
	'domain': '.',
	'kebab': '-',
	'title': ' ',
	'http': '-'
};

const supported = Object.keys(separators).sort();

const caseit = function(input, type = 'camel') {

	if (!supported.includes(type)) {
		throw new TypeError(`Type must either be ${supported.slice(0, -1).join(', ')} or ${supported.slice(-1)[0]}.`);
	}

	const words = caseit.words(input)
		.map((key, idx) => {
			switch (type) {
			case 'camel':
				if (idx == 0) return key.toLowerCase();
				// fallthrough
			case 'title':
				// fallthrough
			case 'http':
				// fallthrough
			case 'pascal':
				return key.charAt(0).toUpperCase() + key.substring(1).toLowerCase();
			case 'domain':
				// fallthrough
			case 'kebab':
				// fallthrough
			case 'snake':
				return key.toLowerCase();
			}
		});

	return words.join(separators[type]);

};

caseit.words = function(input) {
	return input.split(/(?=[A-Z])|_|-| |\./)
		.filter((key) => key.length)
		.map((word) => word.toLowerCase());
};

caseit.detect = function(input) {
	return supported
		.filter((type) => caseit(input, type) === input);
};

caseit.supported = supported;

export default caseit;
