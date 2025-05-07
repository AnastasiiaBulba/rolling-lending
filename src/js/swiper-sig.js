import Swiper from 'swiper';
import 'swiper/css';

const swiperSignature = new Swiper('.gameSwiper', {
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 8,
  allowTouchMove: true,
  breakpoints: {
    1440: {
      slidesPerView: 3.8,
      spaceBetween: 8,
    },
  },
});
