const $ = require( "jquery" );
require('bootstrap');
require('animate.css');
require('slick-carousel');



var lor = "ciao";





$(window).scroll(function(){
    $(".a").toggleClass('animate__backInLeft', $(this).scrollTop() > 150)
})

// S W I P E R
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });