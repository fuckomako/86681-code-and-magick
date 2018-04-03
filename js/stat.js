'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var LEFT_INDENT = 30;
var DISTANCE = 50;

var getRandomOpacity = function () {
  return 'rgba(0,0,255,' + Math.random().toFixed(1) + ')';
};

var drawCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var drawText = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура Вы победили!', x + LEFT_INDENT, y + 30);
  ctx.fillText('Список результатов:', x + LEFT_INDENT, y + 50);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var drawBarChart = function (ctx, times, names, x, y) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], x + LEFT_INDENT + (BAR_WIDTH + DISTANCE) * i, y + 250);
    ctx.fillText(Math.round(times[i]), x + LEFT_INDENT + (BAR_WIDTH + DISTANCE) * i, (y + 220) - (BAR_HEIGHT * times[i]) / maxTime);
    ctx.beginPath();
    ctx.moveTo(x + LEFT_INDENT + (BAR_WIDTH + DISTANCE) * i, y + 230);
    ctx.lineTo(x + LEFT_INDENT + BAR_WIDTH + (BAR_WIDTH + DISTANCE) * i, y + 230);
    ctx.lineTo(x + LEFT_INDENT + BAR_WIDTH + (BAR_WIDTH + DISTANCE) * i, (y + 230) - (BAR_HEIGHT * times[i] / maxTime));
    ctx.lineTo(x + LEFT_INDENT + (BAR_WIDTH + DISTANCE) * i, (y + 230) - (BAR_HEIGHT * times[i] / maxTime));
    ctx.closePath();
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomOpacity();
    ctx.fill();
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.3)');
  drawCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  drawText(ctx, CLOUD_X, CLOUD_Y, '#000');
  drawBarChart(ctx, times, names, CLOUD_X, CLOUD_Y);
};
