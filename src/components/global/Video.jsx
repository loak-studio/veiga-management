import { renderRichText, storyblokEditable } from "@storyblok/react"
export default function Video(props){
  const titleHtml = renderRichText(props.blok.title)
  const descriptionHtml = renderRichText(props.blok.description)
  return(<div className="video" {...storyblokEditable(props.blok)}>
    <h2 className="video__title h2" dangerouslySetInnerHTML={{__html:titleHtml}}/>
    <iframe className="video__iframe" src="https://www.youtube.com/embed/aqVTzT2qH98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>)
}