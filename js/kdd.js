$(function(){
    $('.header').mouseenter(function(){
        $(this).addClass('on');
    });
    $('.header').mouseleave(function(){
        $(this).removeClass('on');
    });

    var swiper = new Swiper(".mainSwiper", {
        spaceBetween: 0,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        // speed: 1000,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function(){
                $('.bar_progress').removeClass('on');
                console.log($('.bar_progress').offset());
                $('.bar_progress').addClass('on');
            }
        },
      });

});// jquery end
