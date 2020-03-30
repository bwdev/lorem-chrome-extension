var rewire = require('rewire');
var serviceRewire = rewire('./lorem.service');
var service = require('./lorem.service');

var buildApiOptions = serviceRewire.__get__('buildApiOptions');
var buildApiUrl = serviceRewire.__get__('buildApiUrl');

describe('LoremService tests', () => {
	test('should get apiOptions', () => {
		var apiOpts = {
			api: 'http://foo',
			type: 'meat-and-filler',
			startWithLorem: 1,
			format: 'text',
		};
		var opts = { count: 2, type: 's' };
		var sut = buildApiOptions(opts, apiOpts);

		expect(sut.sentences).toBe(2);
		expect(sut.paragraphs).toBe(null);
		expect(sut.words).toBe(null);
	});

	test('should build the api url for paragraphs', () => {
		var opts = {
			api: 'http://foo',
			type: 'meat-and-filler',
			startWithLorem: 1,
			format: 'text',
		};
		var sut = buildApiUrl({ type: 'p', count: 1 }, opts);

		expect(sut.url).toBe(
			`http://foo?type=meat-and-filler&paragraphs=1&startWithLorem=1&format=text`
		);
	});
	test('should build the api url for sentences', () => {
		var opts = {
			api: 'http://foo',
			type: 'meat-and-filler',
			startWithLorem: 1,
			format: 'text',
		};
		var sut = buildApiUrl({type: 's', count: 5}, opts);

		expect(sut.url).toBe(
			`http://foo?type=meat-and-filler&sentences=5&startWithLorem=1&format=text`
		);
	});

	test('should randomize string', () => {
		var str = 'Bacon ipsum dolor amet biltong buffalo t-bone brisket, piggy';
		var sut = service.randomizeString(str);

		expect(sut.length).toBe(60);
		expect(sut === str).toBe(false);
	});
});
