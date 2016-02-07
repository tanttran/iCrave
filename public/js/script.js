$(document).ready(function(){

  window.onload = function(){
    $('#fashionTrend').hide();
    $('#fitnessTrend').hide();
  }
  var imageScroll = function(){
    var body = $('#background-one');
    var backgrounds = [
    
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
  };

  imageScroll();


  $('#searchForm').on('submit', function(){
    $('#trendsSection').hide();
  })

  $('#foodClick').on('click', function(){
    console.log('food');
    $('.businessInfoAll').hide();
    $('#trendsSection').show();
    $('#fashionTrend').hide();
    $('#fitnessTrend').hide();
    $('#foodTrend').show();
  })

  $('#fashionClick').on('click', function(){
    console.log('fashion');
    $('.businessInfoAll').hide();
    $('#trendsSection').show();
    $('#foodTrend').hide();
    $('#fitnessTrend').hide();
    $('#fashionTrend').show();
  })

  $('#fitnessClick').on('click', function(){
    console.log('fitness');
    $('.businessInfoAll').hide();
    $('#trendsSection').show();
    $('#fashionTrend').hide();
    $('#foodTrend').hide();
    $('#fitnessTrend').show();
  })


});
