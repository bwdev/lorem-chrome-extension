var PatternMatcher = require('./pattern-matcher');
var loremPatternMatcher = require('./lorem.pattern-matcher');

describe('LoremPatternMatcher tests', () => {
	const loremStr = 'lorem:s1';

	test('should be of prototype PatternMatcher', () => {
		expect(loremPatternMatcher instanceof PatternMatcher).toBe(true);
	});

	test('should match lorem pattern', () => {
		var sut = loremPatternMatcher.matchPattern(loremStr);
		expect(sut.length).toBe(1);
	});

	test('should get correct type of text', () => {
        var suts = loremPatternMatcher.determineType('lorem:s1');
        var sutw = loremPatternMatcher.determineType('lorem:w1');
        var sutp = loremPatternMatcher.determineType('lorem:p1');
        expect(suts).toBe('s');
        expect(sutw).toBe('w');
        expect(sutp).toBe('p');
	});

	test('should get count for type from text', () => {
		var sut = loremPatternMatcher.determineCount(loremStr);
		expect(sut).toBe(1);
	});
});
