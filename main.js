// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var api = 'https://baconipsum.com/api/';

var apiOptions = {
  type: 'meat-and-filler',
  sentences: null,
  paragraphs: 1,
  startWithLorem: 1,
  format: 'text',
}

var regex = /^lorem:[ps][0-9]/g;

document.addEventListener('input', function (evt) {
  var el = evt.target.value;
  if (el === undefined) return;
  parseInput(evt);
});

function parseInput(evt) {
  var loremMatch = evt.target.value.match(regex);
  if (loremMatch === null) return;
  var sentenceOrParagraph = loremMatch[0].match(/[ps]/g)[0];
  var howMany = loremMatch[0].match(/[0-9]/g)[0];

  var sentences = sentenceOrParagraph === 's' ? howMany : null;
  var paragraphs = sentenceOrParagraph === 'p' ? howMany : null;

  var opts = {
    ...apiOptions,
    sentences,
    paragraphs
  };

  callApi(buildApiUrl(api, opts), function (res) {
    evt.target.value = res;
  });
}

function callApi(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", url, true); // true for asynchronous 
  xmlHttp.send(null);
}

function buildApiUrl(url, opts) {
  var type = `type=${opts.type}&`;
  var sentences = opts.sentences == null ? '' : `sentences=${opts.sentences}&`;
  var paragraphs = opts.paragraphs == null ? '' : `paragraphs=${opts.paragraphs}&`;
  var startWithLorem = `startWithLorem=${opts.startWithLorem}&`;
  var format = `format=${opts.format}`

  if (sentences === null && paragraphs === null) sentences = 1

  return `${url}?${type}${sentences}${paragraphs}${startWithLorem}${format}`;
}
