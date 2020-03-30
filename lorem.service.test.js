var rewire = require('rewire');
var service = rewire('./lorem.service');

var buildApiOptions = service.__get__('buildApiOptions');
var buildApiUrl = service.__get__('buildApiUrl');

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

		expect(sut).toBe(
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

		expect(sut).toBe(
			`http://foo?type=meat-and-filler&sentences=5&startWithLorem=1&format=text`
		);
	});
});
