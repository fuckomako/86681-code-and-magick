'use strict';

var CANVAS_INIT_X = 100;
var CANVAS_INIT_Y = 10;
var CANVAS_SHADOW_INIT_X = 110;
var CANVAS_SHADOW_INIT_Y = 20;
var CANVAS_WIDTH = 420;
var CANVAS_HEIGHT = 270;
var CANVAS_PADDING_X = 20;
var CANVAS_PADDING_Y = 30;
var LINE_INDENT = 20;
var HISTOGRAM_HEIGHT = 150;
var BAR_WIDTH = 40;
var INDENT = 50;
var LINE_HEIGHT = 24;
var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';

window.renderStatistics = function (ctx, names, times) {

  var textInitX = CANVAS_INIT_X + CANVAS_PADDING_X;
  var textInitY = CANVAS_INIT_Y + CANVAS_PADDING_Y;

  ctx.fillStyle = ('rgba(0, 0, 0, 0.7)');
  ctx.fillRect(CANVAS_SHADOW_INIT_X, CANVAS_SHADOW_INIT_Y, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = ('#fff');
  ctx.fillRect(CANVAS_INIT_X, CANVAS_INIT_Y, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = ('#000');
  ctx.fillText('Ура вы победили!', textInitX, textInitY);
  ctx.fillText('Список результатов:', textInitX, textInitY + LINE_INDENT);

  var getMaxNumber = function (array) {
    var max = -1;
    for (var i = 0; i < array.length; i++) {
      var value = array[i];
      if (value > max) {
        max = value;
      }
    }
    return max;
  };

  var step = HISTOGRAM_HEIGHT / (getMaxNumber(times) - 0);
  var histogramInitX = CANVAS_INIT_X + CANVAS_PADDING_X;
  var histogramInitY = CANVAS_HEIGHT - CANVAS_PADDING_Y;

  var getRandomOpacity = function () {
    return 'rgba(0,0,255,' + Math.random().toFixed(1) + ')';
  };

  for (var i = 0; i < times.length; i++) {
    var barColor = getRandomOpacity();
    var result = Math.round(times[i]);

    ctx.fillStyle = barColor;

    if (names[i] === 'Вы') {
      ctx.fillStyle = PLAYER_BAR_COLOR;
    }

    ctx.fillRect(histogramInitX + (BAR_WIDTH + INDENT) * i, histogramInitY, BAR_WIDTH, times[i] * step * (-1));
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], histogramInitX + (BAR_WIDTH + INDENT) * i, histogramInitY + LINE_HEIGHT);
    ctx.fillText(result, histogramInitX + (BAR_WIDTH + INDENT) * i, histogramInitY - LINE_HEIGHT / 2 - times[i] * step);
  }
};
