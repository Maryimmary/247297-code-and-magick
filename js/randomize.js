'use strict';

(function () {
  var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)', 'black', 'red', 'blue', 'yellow', 'green', '#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  window.randomizeParameter = {
    colorizeClick: function (element) {
      element.addEventListener('click', function () {
        var color = getRandomItem(colors);
        if (element.tagName.toLowerCase() === 'div') {
          element.style.backgroundColor = color;
        } else {
          element.style.fill = color;
        }
      });
    },
    getRandomParameter: function (array) {
      return getRandomItem(array);
    },
    getRandomColor: function () {
      return getRandomItem(colors);
    }
  };
})();
