const swiper = new Swiper(".header-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    loop:true,
    autoplay:{
      delay:3000
    },
    speed:1000,
  });