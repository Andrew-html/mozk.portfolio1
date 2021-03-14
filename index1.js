$(function() {

  $(window).on('load scroll',function(){

    $('.fadeIn').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(500).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInName').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(4500).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInBackground').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(500).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInHeaders').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(3500).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInLine').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(100).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInDown').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(1700).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInUp').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(500).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInLeft').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(1700).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInLeftContents').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(500).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInRight').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(1700).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

    $('.fadeInRightContents').each(function(){
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() +100 ) {
        $(this).delay(500).queue(function(){
          $(this).addClass('animated');
        })
      }
    });

  });
});
