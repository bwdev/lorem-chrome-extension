var PatternMatcher = require('./pattern-matcher');
var sentencePatternMatcher = require('./sentence-pattern-matcher');

describe('sentencePatternMatcher tests', () => {
	const sentenceStr = '>>:1';

	test('should be instance of PatternMatcher', () => {
		expect(sentencePatternMatcher instanceof PatternMatcher).toBe(true);
	});

	test('should match word pattern', () => {
		var sut = sentencePatternMatcher.matchPattern(sentenceStr);
		expect(sut.length).toBe(1);
	});

	test('should get type of text', () => {
		var sut = sentencePatternMatcher.determineType(sentenceStr);
		expect(sut).toBe('s');
	});

	test('should get count for type from text', () => {
        var sut = sentencePatternMatcher.determineCount(sentenceStr)
		expect(sut).toBe(1);
	});
});
