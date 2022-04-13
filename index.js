'use strict';

const separators = {
	'camel': '',
	'pascal': '',
	'snake': '_',
	'domain': '.',
	'kebab': '-',
	'title': ' ',
	'http': '-',
	'lower': '',
	'upper': ''
};

const supported = Object.keys(separators).sort();

module.exports = exports = function(input, type = 'camel') {

	if (!supported.includes(type)) {
		throw new TypeError(`Type must either be ${supported.slice(0, -1).join(', ')} or ${supported.slice(-1)[0]}.`);
	}

	const words = exports.words(input)
		.filter((key) => key.length)
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
			case 'lower':
				// fallthrough
			case 'snake':
				return key.toLowerCase();
			case 'upper':
				return key.toUpperCase();
			}
		});

	return words.join(separators[type]);

};

exports.words = function(input) {
	return input.split(/(?=[A-Z])|_|-| |\./)
		.map((word) => word.toLowerCase());
};

exports.detect = function(input) {
	return supported
		.filter((type) => exports(input, type) === input);
};

exports.supported = supported;
