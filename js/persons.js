'use strict';

(function () {
  var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var data = [];

  function pushArray(arr) {
    for (var i = 0; i < 4; i++) {
      var dataObject = {
        name: window.randomizeParameter.getRandomParameter(firstNames) + ' ' + window.randomizeParameter.getRandomParameter(surnames),
        coatColor: window.randomizeParameter.getRandomColor(),
        eyesColor: window.randomizeParameter.getRandomColor()
      };
      arr.push(dataObject);
    }
  }
  pushArray(data);

  var similarList = document.querySelector('.setup-similar-list');
  function createElement() {
    var template = document.querySelector('#similar-wizard-template').content.cloneNode(true);
    template.querySelector('.setup-similar-label').textContent = data[i].name;
    template.querySelector('.wizard-coat').style.fill = data[i].coatColor;
    template.querySelector('.wizard-eyes').style.fill = data[i].eyesColor;
    return template;
  }

  window.load(function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(createElement());
    }
    similarList.appendChild(fragment);

    document.querySelector('.setup').querySelector('.setup-similar').classList.remove('hidden');
  });
})();
