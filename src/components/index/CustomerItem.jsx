import "./customer-item.css"
import { storyblokEditable } from "@storyblok/react"
export default function CustomerItem(props){
  return(<li {...storyblokEditable(props.blok)} className="customer-item">
    <figure className="customer-item__figure">
      <img src={props.blok.picture.filename} alt="" />
    </figure>
    <h3 className="customer-item__name h5">{props.blok.name}</h3>
    <span className="customer-item__role text">{props.blok.role}</span>
    <span className="customer-item__followers text bold">{props.blok.followers} abonnés</span>
  </li>)
}