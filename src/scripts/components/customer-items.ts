import { CountUp } from "countup.js";
import { inView } from "motion"

const items = Array.from(document.querySelectorAll('.customer-item__followers-count')) as HTMLElement[]

if(items.length > 0){
  items.forEach(item=>{
      const t =item.innerText.replace(',','.')
      const tFloat = parseFloat(t)
      const con = new CountUp(item, tFloat, {
        duration: 5,
        enableScrollSpy:true,
        decimal:',',
        decimalPlaces:t.includes('.') ? 1: 0
      });
      con.start();
  })
}