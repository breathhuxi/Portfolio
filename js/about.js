  var nbDrop = 60;

  function randRange (minNum, maxNum) {
    return ( Math.floor( Math.random() * (maxNum - minNum +1) + minNum) );
  }

function createRain () {
  var style = getComputedStyle(document.body);
  // var dropHeight = style.getPropertyValue('--drop-height');
  // var dropWidth = style.getPropertyValue('--drop-width');
  // var fallHeight = style.getPropertyValue('--fall-height');
  // console.log(dropHeight); //string: 80px
  // console.log(dropWidth); //string: 1px
  // console.log(fallHeight); //string: 900px
  for (var i=1; i<nbDrop; i++) {
    var dropLeft = randRange(0, $(window).width() - 1); //dropWidth
    var dropTop = randRange(-1000, 1000);

    console.log($(window).width());
    if (dropTop + 80 < $(window).height() - 900) { // dropHeight fallHeight
      $('.intro').append('<div class="drop" id="drop' + i + '"></div>');
      $('#drop'+i).css('left', dropLeft);
      $('#drop'+i).css('top', dropTop);
    }
  }
}

export function initAbout() {
  // hide and show name intro
  $('.nameIntroduction').css("display", "none");
  $(".intro-title-wrapper").on("click", function(event){
    if ($('.nameIntroduction').css("display") == "none") {
      $('.nameIntroduction').css("display", "block");
      window.scroll(0, $('.selfIntroduction').outerHeight());
    } else {
      $('.nameIntroduction').css("display", "none");
      window.scroll(0, 0);
    }
  });

  // init rain
  createRain();
  $('.drop').hide();
  $(".selfIntroduction .intro-title-wrapper").mouseover(function(){
    $('.drop').toggle();
  });
  $(".selfIntroduction .intro-title-wrapper").mouseout(function(){
    $('.drop').toggle();
  });

  // init ripple
  $('.ripple-wrapper').hide();
  $(".nameIntroduction .intro-title-wrapper").mouseover(function(){
    $('.ripple-wrapper').toggle();
  });
  $(".nameIntroduction .intro-title-wrapper").mouseout(function(){
    $('.ripple-wrapper').toggle();
  });
};