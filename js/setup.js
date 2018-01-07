'use strict';
//  Открытие/закрытие окна настройки персонажа
(function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var userName = document.querySelector('.setup-user-name');

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  function onPopupEscPress(evt) {
    if (document.activeElement !== userName) {
      window.util.isEscEvent(evt, closePopup);
    }
  }

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
})();
