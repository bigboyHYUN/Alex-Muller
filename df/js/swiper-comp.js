const swiper = new Swiper(".comp", {
    slidesPerView: 3,
    spaceBetween: 30,
    // freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      501: {
        slidesPerView: 1,
        spaceBetween: 0
      },

      838:{
        slidesPerView: 2
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 0
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

