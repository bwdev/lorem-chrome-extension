function callApi(parsed, apiOptions, callback) {
	console.log(apiOptions);
	var urlOpts = buildApiUrl(parsed, apiOptions);
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText, urlOpts);
	};
	xmlHttp.open('GET', urlOpts.url, true); // true for asynchronous
	xmlHttp.send(null);
}

function buildApiUrl(parsed, apiOptions) {
	var opts = buildApiOptions(parsed, apiOptions);
	var type = `type=${opts.type}&`;
	var sentences =
		opts.sentences == null ? '' : `sentences=${opts.sentences}&`;
	var paragraphs =
		opts.paragraphs == null ? '' : `paragraphs=${opts.paragraphs}&`;

	var startWithLorem = `startWithLorem=${opts.startWithLorem}&`;
	var format = `format=${opts.format}`;

	if (sentences === null && paragraphs === null) sentences = 1;

	return {
		url: `${opts.api}?${type}${sentences}${paragraphs}${startWithLorem}${format}`,
		words: opts.words
	};
}

function buildApiOptions(options, apiOptions) {
	var sentences = options.type === 's' ? options.count : null;
	var paragraphs = options.type === 'p' ? options.count : null;
	var words = options.type === 'w' ? options.count : null;

	if (words && +options.count > 20) paragraphs = options.count / 20;

	return {
		...apiOptions,
		sentences,
		paragraphs,
		words,
	};
}

module.exports = callApi;
