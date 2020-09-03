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
    $(".navbar").toggleClass('off', $(this).scrollTop()<680);
    $(".navbar").toggleClass('animate__animated animate__fadeInDown', $(this).scrollTop()>680);
    //scroll on skill section
    $(".a").toggleClass('animate__backInLeft', $(this).scrollTop() > 250);
    $(".title").toggleClass('animate__bounce', $(this).scrollTop() > 250);
    $(".skill-icon").toggleClass('animate__rotateIn', $(this).scrollTop() > 250);
    $(".skill-icon-left").toggleClass('animate__lightSpeedInLeft', $(this).scrollTop() > 250);
    $(".skill-icon-right").toggleClass('animate__lightSpeedInRight', $(this).scrollTop() > 250);
    $(".skill-text").toggleClass('animate__bounceIn', $(this).scrollTop() > 250);
    $(".adv").toggleClass('animate__fadeIn', $(this).scrollTop() > 250);

    //scroll on Work section
    $(".work-icon").toggleClass('animate__rotateIn', $(this).scrollTop() > 1000);
    $(".work-icon-left").toggleClass('animate__lightSpeedInLeft', $(this).scrollTop() > 1000);
    $(".work-icon-right").toggleClass('animate__lightSpeedInRight', $(this).scrollTop() > 1000);
    // $(".work-list").toggleClass('animate__backInRight', $(this).scrollTop() > 650);

     //scroll on Contact section
     $(".contact-icon").toggleClass('animate__rotateIn', $(this).scrollTop() > 2000);
     $(".contact-icon-left").toggleClass('animate__lightSpeedInLeft', $(this).scrollTop() > 2000);
     $(".contact-icon-right").toggleClass('animate__lightSpeedInRight', $(this).scrollTop() > 2000);
     $(".contacts").children("a").toggleClass('animate__heartBeat', $(this).scrollTop() > 2000);
     $(".about-container").children("p").toggleClass('animate__slideInLeft', $(this).scrollTop() > 2000);
  })


  //work section

  var work =$(".work");
  var languages=$(".work-link");
  console.log(languages);
  
  work.click(function (){
    // $(".work-img").children(".site").addClass('off')
    console.log("click");
    // work.toggleClass('animate__animated animate__bounceOut');
    languages.toggleClass('animate__fadeOut');
    $(this).toggleClass('animate__animated animate__bounceIn');
    $(this).children(".work-img").children("img").toggleClass('off');
  })

  //interval to change logo
  setInterval(changeLogo, 3500);
  function changeLogo(){
    profile.toggleClass('animate__flipOutY');
    profile.toggleClass('off');
    logo.toggleClass('off');
    logo.toggleClass('animate__flipInY');
  }
})