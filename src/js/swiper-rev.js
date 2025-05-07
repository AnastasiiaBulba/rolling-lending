import Swiper from 'swiper';
import 'swiper/css';

const swiperGallery = new Swiper('.reviewsSwiper', {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 8,
  allowTouchMove: true,
  breakpoints: {
    1440: {
      slidesPerView: 6.6,
      spaceBetween: 8,
      allowTouchMove: false,
    },
  },
});
