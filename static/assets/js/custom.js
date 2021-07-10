(function($) {
    'use strict';

    // Filter

    $(document).ready(function() {
        $('.buttons').click(function() {
            var buttonvalue = $(this).attr('data-filter');

            if (buttonvalue == 'all') {
                $('.image-filter').show('1000');
            } else {
                $('.image-filter').not('.' + buttonvalue).hide('200');
                $('.image-filter').filter('.' + buttonvalue).show('200');
            }
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    // Testimonial Slider

    $('#testimonial').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        responsive: {
            0: {
                dots: true,
                items: 1
            },
            600: {
                dots: true,
                items: 1
            },
            1000: {
                dots: true,
                items: 1
            }
        }
    });

    // Animation

    new WOW().init();

    // Home Slider

    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });

})(window.jQuery);