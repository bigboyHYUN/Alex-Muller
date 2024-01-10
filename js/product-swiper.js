const productSwiper = new Swiper(".product-swiper", {
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints:{
      360:{
        slidesPerView:2,
      },


      768:{
        slidesPerView:3,
      },

      1432:{
        slidesPerView:4,
      },
    }
  });

