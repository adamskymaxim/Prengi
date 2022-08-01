$(document).ready(function(){
    $('.promo__slide').slick({
      dots: true,
      arrow: false
    });
  });


$(document).ready(function(){
  $('.industry__carousel').slick({
      speed: 1200,
      adptiveHeght: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.png"></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.png"></img></button>',
      Infinity: true
  });
});
      