import { CountUp } from "countup.js";
const counters = Array.from(
  document.querySelectorAll(".value")
) as HTMLElement[];
counters.forEach((counter) => {
  counter.innerHTML = "0";
});
counters.forEach((counter) => {
  const con = new CountUp(
    counter,
    parseFloat(counter.dataset.value as string),
    {
      duration: 5,
      enableScrollSpy: true,
      scrollSpyOnce: true,
    }
  );
  con.start();
});
