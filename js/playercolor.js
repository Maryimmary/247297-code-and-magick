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
}) ();
