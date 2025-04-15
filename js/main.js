$(document).ready(function () {
    // main page - slider
    var swiper = new Swiper(".mainslider", {
        speed: 1000,
        loop: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".swiper-button-next.whitearrow",
            prevEl: ".swiper-button-prev.whitearrow",
        },

        pagination: {
            el: ".swiper-pagination.styledpagination",
            clickable: true,
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

    // burger menu
    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger').click(function () {
        $('body').toggleClass('hidden');
        $('.header__nav').toggleClass('show');
    })

})