$(document).ready(function(){

  window.onload = function(){
    $('#fashionTrend').hide();
    $('#fitnessTrend').hide();
    $('#fashionNow').hide();
    $('#fitnessNow').hide();
    $('#searchDisplay').hide();
  };

  $('#formSubmit').on('submit', function(){
    console.log('hide me');
    $('#trendsSection').hide();
    $('#searchDisplay').show();
  });

  $('#foodClick').on('click', function(){
    console.log('food');
    $('#searchDisplay').hide();
    $('#trendsSection').show();
    $('#fashionTrend').hide();
    $('#fitnessTrend').hide();
    $('#foodTrend').show();
    $('#fashionNow').hide();
    $('#fitnessNow').hide();
    $('#foodNow').show();
  });

  $('#fashionClick').on('click', function(){
    console.log('fashion');
    $('#searchDisplay').hide();
    $('#trendsSection').show();
    $('#foodTrend').hide();
    $('#fitnessTrend').hide();
    $('#fashionTrend').show();
    $('#foodNow').hide();
    $('#fitnessNow').hide();
    $('#fashionNow').show();
  });

  $('#fitnessClick').on('click', function(){
    console.log('fitness');
    $('#searchDisplay').hide();
    $('#trendsSection').show();
    $('#fashionTrend').hide();
    $('#foodTrend').hide();
    $('#fitnessTrend').show();
    $('#foodNow').hide();
    $('#fashionNow').hide();
    $('#fitnessNow').show();
  });

  $('.itemName').on('click','li', function(){
    console.log('active');
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.categoryList').on('click','li', function(){
    $(this).addClass('active').siblings().removeClass('active');
  })

  // var imageScroll = function(){
  //   var body = $('#background-one');
  //   var backgrounds = [
  
  //   'url(../image/imageOne.jpeg)',
  //   'url(../image/imageTwo.jpeg)',
  //   'url(../image/imageThree.jpeg)',
  //   ];

  //   var current = 0;

  //   function nextBackground(){
  //     body.css(
  //       'background',
  //       backgrounds[current = ++current % backgrounds.length]
  //       );
  //     setTimeout(nextBackground, 5000);
  //   }

  //   setTimeout(nextBackground, 5000);
  //   body.css('background', backgrounds[0]);
  // };

  // imageScroll();

});