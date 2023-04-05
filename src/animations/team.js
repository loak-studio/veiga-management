import { animate, inView, spring, stagger } from "motion";

const teamMembers = document.querySelectorAll(".team-item");

if (teamMembers) {
  inView(teamMembers[0], () => {
    animate(
      teamMembers,
      {
        x: [-50, 0],
        opacity: 1,
      },
      {
        delay: stagger(0.1),
        duration: 0.1,
        easing: spring(),
      }
    );
  });
}
