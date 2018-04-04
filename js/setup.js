'use strict';

var dialogWindow = document.querySelector('.setup');
dialogWindow.classList.remove('hidden');

var HERO_NAMES = ['Вашингтон', 'Люпита', 'Юлия', 'Виктор', 'Кристоф', 'Мария', 'Хуан Себастьян', 'Иван'];
var HERO_SURNAMES = ['Ирвинг', 'Нионго', 'Топольницкая', 'Онопко', 'Вальц', 'Мирабелла', 'Верон', 'да Марья'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');

var similarHeroTemplate = document.querySelector('#similar-wizard-template').content;

var getRandomElement = function (arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

var drawHero = function (heroName, heroSurname, heroCoat, heroEyes) {
  var heroID = {
    name: getRandomElement(heroName) + ' ' + getRandomElement(heroSurname),
    coatColor: getRandomElement(heroCoat),
    eyesColor: getRandomElement(heroEyes)
  };
  return heroID;
};

var drawHeroElement = function (hero) {
  var heroElement = similarHeroTemplate.cloneNode(true);

  heroElement.querySelector('.setup-similar-label').textContent = hero.name;
  heroElement.querySelector('.wizard-coat').style.fill = hero.coatColor;
  heroElement.querySelector('.wizard-eyes').style.fill = hero.eyesColor;

  return heroElement;
};

var drawSimilarHeros = function (heros) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < heros.length; i++) {
    fragment.appendChild(drawHeroElement(heros[i]));
  }
  similarListElement.appendChild(fragment);
};

var heros = [];
for (var i = 0; i < 4; i++) {
  heros[i] = drawHero(HERO_NAMES, HERO_SURNAMES, COAT_COLOR, EYES_COLOR);
}

drawSimilarHeros(heros);
document.querySelector('.setup-similar').classList.remove('hidden');
