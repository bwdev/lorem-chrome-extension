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

window.addEventListener(
	'input',
	function(evt) {
		var val = evt.target.value;
		if (val === undefined) return;

		var parsed = parser.parse();

		callApi(parsed, function(res) {
			var val = res;
			if (words) {
				val = res
					.split(' ')
					.filter((v, i) => i < howMany)
					.join(' ');
      }
      
			evt.target.value = val;
		});
	},
	apiOptions
);
