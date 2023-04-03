import { storyblokEditable, renderRichText } from "@storyblok/react"
export default function OurHistoryItem(props){
  return(
  <div className="our-history-item" {...storyblokEditable(props.blok)}>
      {props.blok.title && <h2 className="our-history-item__title h2">{props.blok.title}</h2>}
      <figure className="our-history-item__figure">
        <img width={1400} height={800} src={props.blok.picture.filename +"/m/1400x800/"} alt={props.blok.picture.alt} />
      </figure>
      <span className="our-history-item__year h3">{props.blok.year}</span>
      <div className="our-history-item__description text" dangerouslySetInnerHTML={{__html:renderRichText(props.blok.description)}}/>
  </div>
  )
}