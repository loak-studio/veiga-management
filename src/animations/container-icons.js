import { animate, inView, spring, stagger } from "motion";

const containerBackgroundSpace = document.querySelector(
  ".container__icons-container"
);
const iconsLeft = document.querySelectorAll(
  ".container__icons-container .from-left"
);
const iconsRight = document.querySelectorAll(
  ".container__icons-container .from-right"
);
if(containerBackgroundSpace && iconsLeft.length > 0 && iconsRight.length  >0){
  inView(containerBackgroundSpace, () => {
    animate(
      iconsLeft,
      { x: [-50, 0], opacity: 1 },
      {
        delay: stagger(0.1),
        duration: 0.2,
        easing: spring(),
      }
    );
    animate(
      iconsRight,
      { x: [50, 0], opacity: 1 },
      {
        delay: stagger(0.1),
        duration: 0.2,
        easing: spring(),
      }
    );
  });
  
}