'use strict';

var dialogWindow = document.querySelector('.setup');
dialogWindow.classList.remove('hidden');

var HERO_NAMES = ['Вашингтон', 'Люпита', 'Юлия', 'Виктор', 'Кристоф', 'Мария', 'Хуан Себастьян', 'Иван'];
var HERO_SURNAMES = ['Ирвинг', 'Нионго', 'Топольницкая', 'Онопко', 'Вальц', 'Мирабелла', 'Верон', 'да Марья'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarHeroTemplate = document.querySelector('#similar-wizard-template').content;
var heros = [];

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var drawHero = function (numberOfHero) {
  for (var i = 0; i < numberOfHero; i++) {
    heros[i] = {
      name: getRandomElement(HERO_NAMES) + ' ' + getRandomElement(HERO_SURNAMES),
      coatColor: getRandomElement(COAT_COLOR),
      eyesColor: getRandomElement(EYES_COLOR)
    };
  }
};

drawHero(4);

var drawHeroElement = function (hero) {
  var heroElement = similarHeroTemplate.cloneNode(true);

  heroElement.querySelector('.setup-similar-label').textContent = hero.name;
  heroElement.querySelector('.wizard-coat').style.fill = hero.coatColor;
  heroElement.querySelector('.wizard-eyes').style.fill = hero.eyesColor;

  return heroElement;
};

var drawSimilarHeros = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < heros.length; i++) {
    fragment.appendChild(drawHeroElement(heros[i]));
  }
  similarListElement.appendChild(fragment);
};

drawSimilarHeros(heros);
document.querySelector('.setup-similar').classList.remove('hidden');
