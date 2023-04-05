import { animate, inView, spring, stagger } from "motion";

const ourServices = document.querySelector(".our-services");
if (ourServices) {
  const items = ourServices.querySelectorAll(".our-services__items > *");

  inView(
    ourServices,
    () => {
      animate(
        items,
        { y: [20, 0], opacity: [0, 1] },
        {
          delay: stagger(0.2),
          duration: 0.1,
          easing: spring(),
        }
      );
    },
    { amount: 0.6 }
  );
}
