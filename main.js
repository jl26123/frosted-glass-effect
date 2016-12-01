var offset,
  fromBottom,
  fromRight;

$("body").append('<div id="blurredContentFrame"><div id="blurredContent"></div></div>');

$('#blurredContentFrame').css({
  'width': $('#frostedBk').width(),
  'height': $('#frostedBk').height()
});

$('#blurredContent').css({
  'width': $('#content').width(),
  'height': $('#content').height()
});

$('#content').clone().appendTo('#blurredContent');

positionBlur();


function positionBlur() {
  offset = $('#frostedBk').offset();
  $('#blurredContentFrame').css({
    'left': offset.left,
    'top': offset.top
  });
  $('#blurredContent').css({
    'left': -offset.left,
    'top': -offset.top
  });
}


var dragging = false;
var startX, startY;
var blockStartX, blockStartY;

$('#frostedBk').mousedown(function(e){
  e.preventDefault();
  dragging = true;
  startX = e.pageX;
  startY = e.pageY;
  blockStartX = parseInt($('#frostedBk').css('left'));
  blockStartY = parseInt($('#frostedBk').css('top'));
});
$('#frostedBk').mouseup(function(e){
  e.preventDefault();
  dragging = false;
});

$(document).on('mousemove', function(e) {
  if (dragging) {
    $('#frostedBk').css({
      'top': blockStartY + e.pageY - startY,
      'left': blockStartX + e.pageX - startX
    });
    positionBlur();
  }
});
