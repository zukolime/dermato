import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const slider = () => {
  const swiper = new Swiper(".feedback__swiper", {
    modules: [Navigation, Pagination],
    speed: 500,
    loop: true,
    slidesPerView: 1,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".feedback__arrow-next",
      prevEl: ".feedback__arrow-prev",
    },

    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
    },
  });
};
