'use strict';
window.colorizeElement = function (element, array, callback) {
  if (typeof callback === 'function') {
    element.addEventListener('click', function (evt) {
      if (evt.target.className === element.className || evt.target.className === element.children[0].className) {
        if (typeof callback === 'function') {
          callback(element, array[Math.floor(Math.random() * array.length)]);
        }
      }
    });
  }
};
