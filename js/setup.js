'use strict';
// Изменение характеристик персонажа по нажатию
(function () {
  var playerPerson = document.querySelector('.setup-player');
  var playerCoat = playerPerson.querySelector('.wizard-coat');
  var playerEyes = playerPerson.querySelector('.wizard-eyes');
  var playerFireball = playerPerson.querySelector('.setup-fireball-wrap');

  function setFill(element, color) {
    element.style.fill = color;
  }

  function setBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }

  window.colorizeElement(playerCoat, ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'], setFill);
  window.colorizeElement(playerEyes, ['black', 'red', 'blue', 'yellow', 'green'], setFill);
  window.colorizeElement(playerFireball, ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'], setBackgroundColor);

  // Перетаскивание инвентаря
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
