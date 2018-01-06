'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupSimilar = setup.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
var data = [];
var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

//Открытие/закрытие окна настройки персонажа
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');

setupOpen.addEventListener('click', function(evt) {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if(evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function (evt) {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if(evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

function onPopupEscPress (evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== userName) {
    closePopup();
  }
}

function openPopup(){
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

// Изменение характеристик персонажа по нажатию
var playerPerson = document.querySelector('.setup-player');
var playerCoat = playerPerson.querySelector('.wizard-coat');
var playerEyes = playerPerson.querySelector('.wizard-eyes');
var playerFireball = playerPerson.querySelector('.setup-fireball-wrap');

playerCoat.addEventListener('click', function () {
  playerCoat.style.fill = getRandomItem(colorCoat);
});

playerEyes.addEventListener('click', function () {
  playerEyes.style.fill = getRandomItem(colorEyes);
});

playerFireball.addEventListener('click', function (evt) {
  playerFireball.style.backgroundColor = getRandomItem(fireballColor);
});
