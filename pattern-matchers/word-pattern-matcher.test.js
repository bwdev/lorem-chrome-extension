var PatternMatcher = require('./pattern-matcher');
var wordPatternMatcher = require('./word-pattern-matcher');

describe('WordPatternMatcher tests', () => {
	const wordStr = '<<:1';

	test('should be instance of PatternMatcher', () => {
		expect(wordPatternMatcher instanceof PatternMatcher).toBe(true);
	});

	test('should match word pattern', () => {
		var sut = wordPatternMatcher.matchPattern(wordStr);
		expect(sut.length).toBe(1);
	});

	test('should get type of text', () => {
		var sut = wordPatternMatcher.determineType(wordStr);
		expect(sut).toBe('w');
	});

	test('should get count for type from text', () => {
        var sut = wordPatternMatcher.determineCount(wordStr)
		expect(sut).toBe(1);
	});
});
