import Swiper from "swiper";

const loadSwiper = () => {
  if (document.querySelector(".swiper")) {
    const buttons = Array.from(
      document.querySelectorAll("[data-slider-button]")
    ) as HTMLButtonElement[];
    const swiper = new Swiper(".swiper", {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        809: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          speed: 500,
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
    const preloadNext = (n:number) => {
      swiper
          .slides
          .slice(swiper.activeIndex, swiper.activeIndex + n + 1)
          .map(slide => slide.querySelector('img'))
          .forEach(s => s?.setAttribute('loading', 'eager'));
  };
  swiper.on('slideChange',()=>{
    preloadNext(2)
  })
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        switch (button.dataset.sliderButton) {
          case "previous":
            swiper.slidePrev();
            break;
          case "next":
            swiper.slideNext();
            break;
          default:
            break;
        }
      });
    });
    
  }
};

export { loadSwiper };
