'use strict';
(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };

  var URl = 'https://js.dump.academy/code-and-magick/data';
  window.load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', URl);
    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });
    xhr.send();
  };
})();
