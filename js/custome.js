$(function () {
    $('.navbar-leafy ul li a').each(function () {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active');
        }
    });
});
$(document).ready(function(){ 
    $(".js-form-item").on("click", function () {
        $(this).addClass('form-item--input-filled');
    });
    $(".form-item__input").on("blur", function () {
        if($(this).val() === '') {
            $(this).parent('.js-form-item').removeClass('form-item--input-filled');
        }
    });

    $(window).scroll(function() {
        var positionwindow = $(window).scrollTop();
    
        if(positionwindow  > 300) {
            $("header").addClass("fixedheader");
        }
        if(positionwindow  < 300) {
            $("header").removeClass("fixedheader");
        }
    });
    $(".menu-openmobile").click(function(){
      $(".navbar-leafy").toggleClass("openmenu");
      $(this).toggleClass("closebtnmenu");
    }); 

    // $(".toggle-password").click(function() {
    //   $(this).toggleClass("fa-eye fa-eye-slash");
    //     var input = $($(this).attr("toggle"));
    //     if (input.attr("type") == "password") {
    //       input.attr("type", "text");
    //     } else {
    //       input.attr("type", "password");
    //     }
    // });

})  
$(document).ready(function () {
    if (jQuery('#back-to-top').length) {

        var scrollTrigger = 100, // px

            backToTop = function () {

                var scrollTop = jQuery(window).scrollTop();

                if (scrollTop > scrollTrigger) {

                    jQuery('#back-to-top').addClass('show');

                } else {

                    jQuery('#back-to-top').removeClass('show');

                }

            };

        backToTop();

        jQuery(window).on('scroll', function () {

            backToTop();

        });

        jQuery('#back-to-top').on('click', function (e) {

            e.preventDefault();

            jQuery('html,body').animate({

                scrollTop: 0

            }, 700);

        });
    }
}) 