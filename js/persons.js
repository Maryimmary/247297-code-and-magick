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

  window.load(function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(createElement(data[i]));
    }
    similarList.appendChild(fragment);

    document.querySelector('.setup').querySelector('.setup-similar').classList.remove('hidden');
  });
})();
