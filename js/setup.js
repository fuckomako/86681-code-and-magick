'use strict';

var WIZARD_NAMES = ['Вашингтон', 'Люпита', 'Юлия', 'Виктор', 'Кристоф', 'Мария', 'Хуан Себастьян', 'Иван'];
var SURNAME_NAMES = ['Ирвинг', 'Нионго', 'Топольницкая', 'Онопко', 'Вальц', 'Мирабелла', 'Верон', 'да Марья'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_SIZE = 4;

var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomItem = function (randomItem) {
  return Math.floor(Math.random() * randomItem);
};

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARD_SIZE; i++) {
    wizards.push({
      name: WIZARD_NAMES[getRandomItem(WIZARD_NAMES.length)] + ' ' + SURNAME_NAMES[getRandomItem(SURNAME_NAMES.length)],
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
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var initSetup = function () {
  var wizards = generateWizards();
  var fragment = generateDOMforWizards(wizards);

  addWizardsToDOM(fragment);
  showSetup();
};

initSetup();
