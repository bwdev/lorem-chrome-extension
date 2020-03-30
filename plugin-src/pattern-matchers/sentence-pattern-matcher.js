var PatternMatcher = require('./pattern-matcher');

var SentencePatternMatcher = new PatternMatcher(/^>>:[0-9]/gi);

//overriding prototype
SentencePatternMatcher.determineType = function(str) {
	return 's';
};

//overriding prototype
SentencePatternMatcher.determineCount = function(str) {
	return +this.matchPattern(str)[0].split(':')[1];
};

module.exports = SentencePatternMatcher;
