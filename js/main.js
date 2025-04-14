$(document).ready(function () {
    // main page - slider
    var swiper = new Swiper(".mainslider", {
        speed: 1000,
        loop: true,

        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },

        navigation: {
            nextEl: ".swiper-button-next.whitearrow",
            prevEl: ".swiper-button-prev.whitearrow",
        },

        pagination: {
            el: ".swiper-pagination.styledpagination",
        },
    });

    // header scroll
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });




})