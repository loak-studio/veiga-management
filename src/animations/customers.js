import { animate, inView, spring, stagger } from "motion"

const customers = document.querySelector('.customers')
const customer = customers.querySelectorAll('.customers__list > *')

const brands = customers.querySelectorAll('.customers__brands > *')
inView(customers,()=>{
    animate(customer, { y: [20, 0], opacity: [0,1] },{
      delay: stagger(.1),
      duration: 0.1,
      easing: spring(),
    })
    setTimeout(()=>{
      animate(brands, { x: [20, 0], opacity: [0,1] },{
        delay: stagger(.1),
        duration: 0.1,
        easing: spring(),
      })
    }, 800)
}, {amount:.6})
