'use strict';

(function () {
  var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var data = [];

  function pushArray(arr) {
    for (var i = 0; i < 4; i++) {
      var dataObject = {
        name: window.randomizeParameter.getRandomParameter(firstNames) + ' ' + window.randomizeParameter.getRandomParameter(surnames),
        colorCoat: window.randomizeParameter.getRandomColor(),
        eyesColor: window.randomizeParameter.getRandomColor()
      };
      arr.push(dataObject);
    }
  }
  pushArray(data);

  var similarList = document.querySelector('.setup-similar-list');
  function createElement(wizard) {
    var template = document.querySelector('#similar-wizard-template').content.cloneNode(true);
    template.querySelector('.setup-similar-label').textContent = wizard.name;
    template.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    template.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return template;
  }

  function successHandler(data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(createElement(data[i]));
    }
    similarList.appendChild(fragment);

    document.querySelector('.setup').querySelector('.setup-similar').classList.remove('hidden');
  }

  function errorHandler(errorMessage) {
    var node = document.createElement('div');
    node.style = 'position: absolute; z-index: 100; top: 10px; left: 10px; text-align: center; background-color: lightgreen; color: white; font-size: 30px; font-weight: bold;';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }
  window.load(successHandler, errorHandler);
})();
