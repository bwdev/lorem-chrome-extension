var loremPatternMatcher = require('./pattern-matchers/lorem.pattern-matcher');
var wordPatternMatcher = require('./pattern-matchers/word-pattern-matcher');
var sentencePatternMatcher = require('./pattern-matchers/sentence-pattern-matcher');

function setupChainOfResponsibility(patternMatchers) {
	if (!Array.isArray(patternMatchers) || patternMatchers.length < 2) return;

	for (let i = 0; i < patternMatchers.length; i++) {
		const matcher = patternMatchers[i];
		if(patternMatchers.length >= i + 1) matcher.setNextMatcher(patternMatchers[i + 1]);
	}
}

function parse(val) {
	var patternMatchers = [
		loremPatternMatcher,
		wordPatternMatcher,
		sentencePatternMatcher,
	];

	setupChainOfResponsibility(patternMatchers);
	return patternMatchers[0].getCountAndType(val);
}

module.exports = {
	parse,
};
