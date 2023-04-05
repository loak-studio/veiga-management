import { animate, inView, spring, stagger } from "motion"

const historyItems = document.querySelectorAll('.our-history-item')

if(historyItems){
  historyItems.forEach(item=>{
    inView(item,()=>{
      animate(item,{y:[50,0], opacity:1})
    })
  })
}