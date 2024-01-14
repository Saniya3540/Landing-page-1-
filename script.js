
// HOME SWIPER

var swiper = new Swiper(".home-swiper", {
    spaceBetween: 85,
    //  autoplay: {
    //   delay: 2500,
    //  disableOnInteraction: false,
    //  },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// PRODUCTS SWIPER
var swiper = new Swiper(".p-swiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 70,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
    },
});

/* TESTIMONIAL SWIPER
var swiper = new Swiper(".testimonial-swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});*/