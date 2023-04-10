import { animate, inView, spring, stagger } from "motion";

const hero = document.querySelector(".hero");
if (hero) {
  const heroItems = hero.querySelectorAll(".hero > *");

  inView(hero, () => {
    animate(
      heroItems,
      { y: [50, 0], opacity: [0, 1] },
      {
        delay: stagger(0.2),
        duration: 0.2,
        easing: spring(),
      }
    );
  });
}
