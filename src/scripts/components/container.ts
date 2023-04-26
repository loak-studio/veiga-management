import { scroll } from "motion";

const container = document.querySelector(".container");
if (container) {
  const icons = Array.from(
    container.querySelectorAll(".container__icons-container > figure")
  ) as HTMLElement[];
  setTimeout(() => {
    container.addEventListener("mousemove", (event: any) => {
      const { clientX, clientY } = event;
      icons.forEach((icon) => {
        const value: number = parseInt(icon?.dataset?.parallax as string) ?? 1;
        icon.style.transform = `translateX(${
          (-(clientX - window.innerWidth / 2) / 100) * value
        }px) translateY(${
          (-(clientY - window.innerHeight / 2) / 100) * value
        }px)`;
      });
    });
  }, 1000);
  scroll(({ y }) => {
    const { current } = y;
    icons.forEach((icon) => {
      const value: number = parseInt(icon?.dataset?.parallax as string) ?? 1;
      icon.style.marginTop = `-${current / value}px`;
    });
  });
}
