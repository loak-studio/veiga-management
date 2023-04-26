import { animate, inView, spring, stagger } from "motion";

const services = document.querySelectorAll(".service-item");
if (services) {
  services.forEach((service) => {
    const aside = service.querySelector(".service-item__aside");
    const content = service.querySelector(".service-item__content");
    const background = service.querySelector(".service-item__background-image");
    inView(
      service,
      () => {
        animate(
          aside,
          { x: [-50, 0], opacity: [0, 1] },
          {
            delay: 0.2,
            duration: 0.2,
            easing: spring(),
          }
        );

        animate(
          content,
          { y: [50, 0], opacity: [0, 1] },
          {
            delay: 0.4,
            duration: 0.1,
            easing: spring(),
          }
        );

        animate(
          background,
          { opacity: [0, 1] },
          {
            delay: 1,
            duration: 1,
            easing: spring(),
          }
        );
      },
      { amount: 0.3 }
    );
  });
}
