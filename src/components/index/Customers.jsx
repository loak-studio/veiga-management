import "./customer.css"
import { renderRichText, StoryblokComponent, storyblokEditable } from "@storyblok/react"
export default function Customers(props){
  const __html = renderRichText(props.blok.title)
  return (
  <div className={"customers h2" + (props.blok.arrow ? " customers__arrow" : "")} {...storyblokEditable(props.blok)}>
    <h2 className="customers__title" dangerouslySetInnerHTML={{__html}}/>
    <ul className="customers__list">
      {props.blok.Customers.map((customer,index)=><StoryblokComponent key={index} blok={customer}/>)}
    </ul>
    <ul className="customers__brands">
      {props.blok.brands.map((brand,index)=><li className="customers__brand">
        <figure className="customers__brand-logo">
          <img src={brand.filename} alt="" />
        </figure>
      </li>)}
    </ul>
  </div>)
}