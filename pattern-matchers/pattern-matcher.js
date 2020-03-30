// var inputWord = '>>1';
// var inputSentence = '<<1';
// var inputParagraph = '^^1';

// var wordPattern = '>>';
// var sentencePattern = '<<';
// var paragraphPattern = '^^';
// var countPattern = '[0-9]';
var loremRegex = /^lorem:[psw][0-9]/g;
var keyBindingWordRegex = /^>>[0-9]/g;
var keyBindingParagraphRegex = /^[0-9]/g;
var keyBindingSentenceRegex = /^<<[0-9]/g;
var keyBindingAllInputs = /^<<>>[0-9]/g;

var PatternMatcher = function(pattern) {
	this.pattern = pattern;
	this.next = null;
};

PatternMatcher.prototype = {
	matchPattern: function(str) {
		return str.match(this.pattern);
	},
	setNextMatcher: function(matcher) {
		this.next = matcher;
	},
	getCountAndType: function(str) {
		if (!this.matchPattern(str)) return this.next ? this.next.getCountAndType(str) : null;
		return Object.assign(
			{},
			{
				type: this.determineType(str),
				count: this.determineCount(str),
			}
		);
	},
	determineType: function(str) {
		throw Error(
			'There is no default implementation for determineType on PatternMatcher prototype'
		);
	},
	determineCount: function(str) {
		throw Error(
			'There is no default implementation for determineCount on PatternMatcher prototype'
		);
	},
};

module.exports = PatternMatcher;
