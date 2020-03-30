var PatternMatcher = require('./pattern-matcher');

describe('generic pattern matcher tests', () => {
    let matcher;
	const str = '<<>>:1>>';

    beforeEach(() => {
        matcher = new PatternMatcher(/.*/g);
    })

	test('should be global if <<.*>> pattern is used', () => {
		expect(matcher.determineIsGlobal(str)).toBe(true);
    });
    
    test('should return the string without the << >>', () => {
        expect(matcher.stripGlobalString(str)).toBe('>>:1');
    })
});
