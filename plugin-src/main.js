var parser = require('./parse');
var loremService = require('./lorem.service');

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
	var el = evt.target;
	var val = evt.target.value;
	if (val === undefined) return;
	var parsed = parser.parse(val);
	if (parsed == null) return;

	loremService.callApi(parsed, apiOptions, (txt, urlOpts) => {
		updateDom(el, txt, urlOpts);
		console.log(urlOpts);
		if (parsed.isGlobal) {
			var inputs = document.querySelectorAll('input, textarea');
			inputs.forEach(input => {
				var str = loremService.randomizeString(txt);
				updateDom(input, str, urlOpts);
			});
		}
	});
});

function updateDom(el, txt, opts) {
	var val = txt;
	opts = opts || {};
	if (opts.words != null) {
		val = txt
			.split(' ')
			.filter((v, i) => i < opts.words)
			.join(' ');
	}

	el.value = val;
}
