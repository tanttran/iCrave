$(document).ready(function(){
  var body = $('#background-one');
  var backgrounds = [
  'url(../image/amazing-one.jpg)',
  'url(../image/amazing-two.jpg)',
  'url(../image/amazing-three.jpg)',
  'url(../image/amazing-five.jpg)',
  'url(../image/amazing-six.jpg)'
  ];

  var current = 0;

  function nextBackground(){
    body.css(
      'background',
      backgrounds[current = ++current % backgrounds.length]
      );
  setTimeout(nextBackground, 5000);
  }

  setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);

});