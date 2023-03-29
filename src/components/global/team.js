
import Swiper from 'swiper';

const loadSwiper = () => {
  if(document.querySelector('.swiper')){
    const buttons = document.querySelectorAll('[data-slider-button]')
  const swiper = new Swiper('.swiper', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
      809:{
        slidesPerView:3,
        spaceBetween:20
      },
      1200:{
        speed: 500,
    slidesPerView: 5,
    spaceBetween: 20,
      }
    }
  });
  buttons.forEach(button => {
   button.addEventListener('click',()=>{
    switch (button.dataset.sliderButton) {
      case "previous":
        swiper.slidePrev()
        break;
      case "next":
      swiper.slideNext()
        break;
      default:
        break;
    }
   })
  })
  }
}




export { loadSwiper }