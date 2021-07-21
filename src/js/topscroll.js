$(document).ready(function() {

  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {

    var topPos = $(this).scrollTop();


    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); 


  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });

  var home = $("#home").position();
  var about = $("#about").position();
	var products = $("#products").position();
	var contact = $("#contact").position();

  $('.navigation__link_1').click(function() {
    $('html, body').animate({
      scrollTop: home.top
    }, 500);
    return false;

  });

  $('.navigation__link_2').click(function() {
    $('html, body').animate({
      scrollTop: about.top
    }, 500);
    return false;

  });

  $('.navigation__link_3').click(function() {
    $('html, body').animate({
      scrollTop: products.top
    }, 500);
    return false;

  });

  $('.navigation__link_4').click(function() {
    $('html, body').animate({
      scrollTop: contact.top
    }, 500);
    return false;

  });

});