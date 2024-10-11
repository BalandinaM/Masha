document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 720){
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      //nested: true,

      // // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // pagination: {
      //   type: 'fraction',
      // },

      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      //navigation: true,

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  } else {
    const swiper = document.querySelector('.swiper');
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    swiper.classList.remove('swiper');
    swiperWrapper.classList.remove('swiper-wrapper');
    slides.forEach(element => {
      element.classList.remove('swiper-slide');
    });
  }
})

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   //nested: true,

//   // // If we need pagination
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },

//   // pagination: {
//   //   type: 'fraction',
//   // },

//   // Navigation arrows
//   // navigation: {
//   //   nextEl: '.swiper-button-next',
//   //   prevEl: '.swiper-button-prev',
//   // },

//   //navigation: true,

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
