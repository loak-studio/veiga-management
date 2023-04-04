import { animate, inView } from "motion"

const thumbnails =  document.querySelectorAll(".blog-thumbnail")
thumbnails.forEach(t=>{
  t.style.opacity = 0
})
inView('.blog-thumbnail',(thumbnail)=>{
  animate(thumbnail.target, {opacity:[0,1], transform:["translateY(100px)","translateY(0)"]})
})
