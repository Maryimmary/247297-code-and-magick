'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var setupSimilar = setup.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
var data = [];
var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pushArray(arr) {
  for (var i = 0; i < 4; i++) {
    var dataObject = {
      name: getRandomItem(firstNames) + ' ' + getRandomItem(surnames),
      coatColor: getRandomItem(colorCoat),
      eyesColor: getRandomItem(colorEyes)
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

var fragment = document.createDocumentFragment();
for (var i = 0; i < data.length; i++) {
  fragment.appendChild(createElement());
}
similarList.appendChild(fragment);
