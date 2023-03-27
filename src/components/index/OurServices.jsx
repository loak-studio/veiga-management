import "./our-services.css"
import { renderRichText, StoryblokComponent, storyblokEditable } from "@storyblok/react"

export default function OurServices(props){
  const __html = renderRichText(props.blok.title)
  return (
  <div className="our-services" {...storyblokEditable(props.blok)}>
    <h2 className="our-services__title h2" dangerouslySetInnerHTML={{__html}}></h2>
    <p className="our-services__description text">{props.blok.description}</p>
    <ul className="our-service__items">
    {props.blok.services.map((service,index)=><StoryblokComponent key={index} blok={service}/>)}
    </ul>
  </div>
  )
}