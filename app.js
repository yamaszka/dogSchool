$('.main_bars').click(function() {
     $('.main_menu').css("display", "block");
 });

 $('.main_menu').click(function() {
   $('.main_menu').toggle();
 });

 $('.lesson_bars').click(function() {
      $('.lesson_menu').css("display", "block");
  });

  $('.lesson_menu').click(function() {
    $('.lesson_menu').toggle();
  });

  $('.lesson_bars').hover(function() {
       $('.info').css("display", "block");
   }, function() {
        $('.info').css("display", "none");
    });
