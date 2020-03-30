var PatternMatcher = require('./pattern-matcher');

var WordPatternMatcher = new PatternMatcher(/^<<:[0-9]/gi);

//overriding prototype
WordPatternMatcher.determineType = function(str) {
	return 'w';
};

//overriding prototype
WordPatternMatcher.determineCount = function(str) {
	return +this.matchPattern(str)[0].split(':')[1];
};

module.exports = WordPatternMatcher;
