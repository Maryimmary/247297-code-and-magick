'use strict';
// Изменение характеристик персонажа по нажатию
(function () {
  var playerPerson = document.querySelector('.setup-player');
  var playerCoat = playerPerson.querySelector('.wizard-coat');
  var playerEyes = playerPerson.querySelector('.wizard-eyes');
  var playerFireball = playerPerson.querySelector('.setup-fireball-wrap');

  window.randomizeParameter.colorizeClick(playerCoat);
  window.randomizeParameter.colorizeClick(playerEyes);
  window.randomizeParameter.colorizeClick(playerFireball);

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
