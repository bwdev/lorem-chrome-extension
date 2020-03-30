var parser = require('./parse');
var callApi = require('./lorem.service');

// might make this configurable at some point
var apiOptions = {
	api: 'https://baconipsum.com/api/',
	type: 'meat-and-filler',
	sentences: null,
	paragraphs: 1,
	startWithLorem: 1,
	format: 'text',
	val: '',
};

window.addEventListener('input', function(evt) {
	var val = evt.target.value;
	if (val === undefined) return;
	var parsed = parser.parse(val);
	if (parsed == null) return;
	// console.log(parsed);
	callApi(parsed, apiOptions, function(res, opts) {
		var val = res;
		opts = opts || {};
		if (opts.words != null) {
			console.log(opts);
			val = res
				.split(' ')
				.filter((v, i) => i < opts.words)
				.join(' ');
		}

		evt.target.value = val;
	});
});
