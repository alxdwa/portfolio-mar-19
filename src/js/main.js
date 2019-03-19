$(document).ready(function() {

  $('#navbar').click(function() {
    $('.nav-links').toggleClass('visible');
  });

  $('.work').click(function() {
    $(window).scrollTo('.nav-work', {duration:500});
    $('.nav-links').toggleClass('visible');
  });

  $('.about').click(function() {
    $(window).scrollTo('.nav-about', {duration:500});
    $('.nav-links').toggleClass('visible');
  });

  $('.work-2').click(function() {
    $(window).scrollTo('.nav-work', {duration:500});
  });

  $('.about-2').click(function() {
    $(window).scrollTo('.nav-about', {duration:500});
  });
  
  $('.scrolltop').click(function() {
    $(window).scrollTo((0, 0), {duration:500});
  });


  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }


  


});
