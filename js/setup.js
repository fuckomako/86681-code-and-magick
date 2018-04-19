'use strict';

var WIZARD_NUMBERS = 4;
var WIZARD_NAMES = ['Вашингтон', 'Люпита', 'Юлия', 'Виктор', 'Кристоф', 'Мария', 'Хуан Себастьян', 'Иван'];
var WIZARD__SURNAMES = ['Ирвинг', 'Нионго', 'Топольницкая', 'Онопко', 'Вальц', 'Мирабелла', 'Верон', 'да Марья'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var popup = document.querySelector('.setup');
var popupOpen = document.querySelector('.setup-open');
var popupOpenImg = popupOpen.querySelector('.setup-open-icon');
var popupClose = popup.querySelector('.setup-close');
var popupWizardForm = popup.querySelector('.setup-wizard-form');
var popupNameInput = popupWizardForm.querySelector('.setup-user-name');
var wizardEyes = popupWizardForm.querySelector('.wizard-eyes');
var wizardCoat = popupWizardForm.querySelector('.wizard-coat');
var fireballRound = popupWizardForm.querySelector('.setup-fireball-wrap');

var getRandomItem = function (randomItem) {
  return Math.floor(Math.random() * randomItem);
};

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARD_NUMBERS; i++) {
    wizards.push({
      name: WIZARD_NAMES[getRandomItem(WIZARD_NAMES.length)] + ' ' + WIZARD__SURNAMES[getRandomItem(WIZARD__SURNAMES.length)],
      coatColor: COAT_COLORS[getRandomItem(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[getRandomItem(EYES_COLORS.length)]
    });
  }

  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var generateDOMforWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  return fragment;
};

var addWizardsToDOM = function (fragment) {
  document.querySelector('.setup-similar-list').appendChild(fragment);
};

var showSetup = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var initSetup = function () {
  var wizards = generateWizards();
  var fragment = generateDOMforWizards(wizards);

  addWizardsToDOM(fragment);
  showSetup();
};

initSetup();

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target === popupNameInput) {
      evt.stopPropagation();
    } else {
      closePopup();
    }
  }
};

var onPopupCloseClick = function () {
  closePopup();
};

var onPopupCloseEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

var onWizardEyesClick = function () {
  var eyesColor = EYES_COLORS[getRandomItem(EYES_COLORS.length)];
  wizardEyes.style.fill = eyesColor;
  popupWizardForm.querySelector('input[name="eyes-color"]').value = eyesColor;
};

var onFireballClick = function () {
  var fireballColor = FIREBALL_COLORS[getRandomItem(FIREBALL_COLORS.length)];
  fireballRound.style.backgroundColor = fireballColor;
  fireballRound.querySelector('input').value.style.backgroundColor = fireballColor;
};

var onWizardCoatClick = function () {
  var coatColor = COAT_COLORS[getRandomItem(COAT_COLORS.length)];
  wizardCoat.style.fill = coatColor;
  popupWizardForm.querySelector('input[name="coat-color"]').value = coatColor;
};

popupOpen.addEventListener('click', function () {
  openPopup();
});

popupOpenImg.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var openPopup = function () {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  popupClose.addEventListener('click', onPopupCloseClick);
  popupClose.addEventListener('keydown', onPopupCloseEnterPress);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  fireballRound.addEventListener('click', onFireballClick);
  wizardCoat.addEventListener('click', onWizardCoatClick);
};

var closePopup = function () {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  popupClose.removeEventListener('click', onPopupCloseClick);
  popupClose.removeEventListener('keydown', onPopupCloseEnterPress);
  wizardEyes.removeEventListener('click', onWizardEyesClick);
  fireballRound.removeEventListener('click', onFireballClick);
  wizardCoat.removeEventListener('click', onWizardCoatClick);
};
