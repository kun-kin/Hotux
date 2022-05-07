$(window).scroll(function() {
    // var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > 400) {
        $('.header-main').addClass('fixed');
    } else {
        $('.header-main').removeClass('fixed');
    }
});
/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {

    /* menu mobile */
    new Mmenu(document.querySelector("#menu"));

    document.addEventListener("click", function(evnt) {
        var anchor = evnt.target.closest('a[href="#/"]');
        if (anchor) {
            alert("Thank you for clicking, but that's a demo link.");
            evnt.preventDefault();
        }
    });
    /* end menu mobile */



    $("#date1").datepicker();
    $("#date2").datepicker();


    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });


    var swiper = new Swiper(".banner-item", {
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });



    var swiper = new Swiper(".mySwiperslide1", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiperslide2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    var swiper = new Swiper(".detailsroomslide", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper = new Swiper(".teamSlide", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 499px
            0: {
                slidesPerView: 1,
                spaceBetweenSlides: 0
            },
            567: {
                slidesPerView: 2,
                spaceBetweenSlides: 20
            },
            // when window width is <= 999px
            999: {
                slidesPerView: 3,
                spaceBetweenSlides: 20
            }
        }
    });

    var swiper = new Swiper(".awardSlide", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    var swiper = new Swiper(".mySwiperslide1", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiperslide2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    var swiper = new Swiper(".detailsroomslide", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 499px
            0: {
                slidesPerView: 1,
                spaceBetweenSlides: 0
            },
            567: {
                slidesPerView: 2,
                spaceBetweenSlides: 20
            },
            // when window width is <= 999px
            999: {
                slidesPerView: 3,
                spaceBetweenSlides: 20
            }
        }
    });

});