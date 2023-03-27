import { renderRichText, storyblokEditable } from "@storyblok/react";
import "./hero-service-item.css"
export default function HeroServiceItem(props){
  const __html = renderRichText(props.blok.title)
  return(
  <div className="hero-service-item" {...storyblokEditable(props.blok)}>
    <figure className="hero-service-item__figure">
      <img src={props.blok.icon.filename} alt="" />
    </figure>
    <p className="hero-service-item__text h5" dangerouslySetInnerHTML={{__html}}></p>
  </div>)
}