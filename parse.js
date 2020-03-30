var loremPatternMatcher = require('./pattern-matchers/lorem.pattern-matcher');
var wordPatternMatcher = require('./pattern-matchers/word-pattern-matcher');

function parse(val) {
	loremPatternMatcher.setNextMatcher(wordPatternMatcher);
	return loremPatternMatcher.getCountAndType(val);
}

module.exports = {
	parse,
};
