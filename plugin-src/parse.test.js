require('jest');
var rewire = require('rewire');
var parser = rewire('./parse');

describe('Parser Tests', () => {
	test('should give a valid count and type for lorem sentences', () => {
		var sut = parser.parse('lorem:s1');
		expect(sut.count).toBe(1);
		expect(sut.type).toBe('s');
	});

	test('should get valid count and type for lorem words pattern', () => {
		var sut = parser.parse('lorem:w2');
		expect(sut.count).toBe(2);
		expect(sut.type).toBe('w');
	});

	test('should get valid count and type for lorem paragraph pattern', () => {
		var sut = parser.parse('lorem:p3');
		expect(sut.count).toBe(3);
		expect(sut.type).toBe('p');
	});

	test('should get valid count and type for words pattern', () => {
		var sut = parser.parse('<<:2');
		expect(sut.count).toBe(2);
		expect(sut.type).toBe('w');
	});

	test('should get valid count and type for words pattern', () => {
		var sut1 = parser.parse('<<:2');
		var sut2 = parser.parse('<<:4');
		expect(sut1.count).toBe(2);
		expect(sut1.type).toBe('w');
		expect(sut2.count).toBe(4);
		expect(sut2.type).toBe('w');
	});

	test('should get number of type', () => {});
	test('should get global keybinding', () => {});
	test('should replace text in input', () => {});
	test('should replace text in all inputs', () => {});
});
