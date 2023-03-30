import { inView } from "motion"
import { CountUp } from "countup.js";
const launchCounter = ()=>{
  const counters = document.querySelectorAll('.value');
  inView('.some-numbers',()=>{
    counters.forEach( counter => {
      const con = new CountUp(counter, counter.getAttribute('akhi'), {duration:2})
      con.start()
   });
  },{amount:1})
}

export {launchCounter}