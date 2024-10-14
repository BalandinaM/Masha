document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 720){
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
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
