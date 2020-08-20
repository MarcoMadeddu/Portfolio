const $ = require( "jquery" );
require('bootstrap');
require('animate.css');


$( document ).ready(function() {
  var logo = $('.logo');
  var profile = $('.img');
  var links= $('.link');
  console.log(links);

  links.click(function(){
    var current = $(this);
    current.addClass('animate__zoomOut');
     //interval to change animation
    var change = setTimeout(ActiveLink, 1500);
    function ActiveLink(){
    console.log(current);
    current.removeClass('animate__zoomOut');
    current.addClass('animate__zoomIn');
    setTimeout(function(){links.removeClass('animate__zoomIn , animate__fadeInUpBig');}, 1000);
  }
  })
  
  

  //scroll to effect
  $(window).scroll(function(){
    //scroll on header
    links.toggleClass('animate__fadeOutUpBig', $(this).scrollTop() > 300);
    if(!links.hasClass('animate__fadeInUpBig')){
      links.toggleClass('animate__fadeInUpBig', $(this).scrollTop() > 300);
    }
    //scroll on skill section
    $(".a").toggleClass('animate__backInLeft', $(this).scrollTop() > 250);
    $(".title").toggleClass('animate__bounce', $(this).scrollTop() > 250);
    $(".skill-icon").toggleClass('animate__rotateIn', $(this).scrollTop() > 250);
    $(".skill-icon-left").toggleClass('animate__lightSpeedInLeft', $(this).scrollTop() > 250);
    $(".skill-icon-right").toggleClass('animate__lightSpeedInRight', $(this).scrollTop() > 250);
    $(".skill-text").toggleClass('animate__bounceIn', $(this).scrollTop() > 250);
    $(".adv").toggleClass('animate__backInUp', $(this).scrollTop() > 250);

    //scroll on Work section
    $("#ban1").toggleClass('animate__rotateIn', $(this).scrollTop() > 250);
    $("#ban2").toggleClass('animate__lightSpeedInLeft', $(this).scrollTop() > 250);
    $("#ban3").toggleClass('animate__lightSpeedInRight', $(this).scrollTop() > 250);
  })

  //interval to change logo
  setInterval(changeLogo, 5000);
  function changeLogo(){
    profile.toggleClass('animate__flipOutY');
    profile.toggleClass('off');
    logo.toggleClass('off');
    logo.toggleClass('animate__flipInY');
  }
})