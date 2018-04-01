'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var max = getMaxElement(times);

  var histogramHeight = 160;
  var step = histogramHeight / (max - 0);

  var columnWidth = 40;
  var indent = 50;
  var initialX = 140;
  var initialY = 100;
  var histogramMargin = 5;
  var scoreOffset = 18;

  for (var i = 0; i < times.length; i++) {
    ctx.fillText(Math.floor(times[i]), initialX + indent * i + columnWidth * i, initialY + histogramHeight - times[i] * step - scoreOffset);
    ctx.fillText(names[i], initialX + indent * i + columnWidth * i, initialY + histogramHeight + histogramMargin);
  }

  rectsDraw(times, names, ctx, indent, columnWidth, initialY, histogramHeight, step, initialX);
};

function rectsDraw(times, names, ctx, indent, columnWidth, initialY, histogramHeight, step, initialX) {
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255,0,0,1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,255' + Math.floor(Math.random()) + ')';
    }
    ctx.fillRect(initialX + indent * i + columnWidth * i, initialY + histogramHeight - times[i] * step, columnWidth, times[i] * step);
  }
}

function getMaxElement(arr) {
  var max = -1;

  for (var i = 0; i < arr.length; i++) {
    var time = arr[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
}
