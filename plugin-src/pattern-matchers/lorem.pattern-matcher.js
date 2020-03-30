var PatternMatcher = require('./pattern-matcher');

var LoremPatternMatcher = new PatternMatcher(/^lorem:[spw][0-9]/gi);

// overriding determineType from the prototype
LoremPatternMatcher.determineType = function(str) {
	return this.matchPattern(str)[0].split(':')[1][0];
};

// overriding determineCount from the prototype
LoremPatternMatcher.determineCount = function(str) {
	return +this.matchPattern(str)[0].split(':')[1][1];
};

module.exports = LoremPatternMatcher;
