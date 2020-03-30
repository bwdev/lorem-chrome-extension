function callApi(parsed, callback, apiOptions = apiOptions) {
	var url = buildApiUrl(parsed, apiOptions);
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	};
	xmlHttp.open('GET', url, true); // true for asynchronous
	xmlHttp.send(null);
}

function buildApiUrl(parsed, apiOptions = apiOptions) {
	var opts = buildApiOptions(parsed, apiOptions);
	var type = `type=${opts.type}&`;
	var sentences =
		opts.sentences == null ? '' : `sentences=${opts.sentences}&`;
	var paragraphs =
		opts.paragraphs == null ? '' : `paragraphs=${opts.paragraphs}&`;

	var startWithLorem = `startWithLorem=${opts.startWithLorem}&`;
	var format = `format=${opts.format}`;

	if (sentences === null && paragraphs === null) sentences = 1;

	return `${opts.api}?${type}${sentences}${paragraphs}${startWithLorem}${format}`;
}

function buildApiOptions(options, apiOptions = apiOptions) {
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
