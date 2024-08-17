import Swiper, { Navigation, Thumbs, FreeMode } from "swiper";

export default class Carousel {
  constructor() {
    this.init();
  }

  public init = () => {
    document.querySelectorAll(".c-swiper").forEach((swiperElement, index) => {
      const swiperIndex = index + 1;

      // サムネイル
      const sliderThumbnail = new Swiper(`.js-swiper-thumbnail-${swiperIndex}`, {
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        spaceBetween: 10,
        modules: [FreeMode],
      });

      // スライダー
      const slider = new Swiper(`.js-swiper-main-${swiperIndex}`, {
        slidesPerView: 1,
        navigation: {
          nextEl: `.swiper-button-next-${swiperIndex}`,
          prevEl: `.swiper-button-prev-${swiperIndex}`,
        },
        thumbs: {
          swiper: sliderThumbnail,
        },
        modules: [Navigation, Thumbs],
      });
    });
  };
}
