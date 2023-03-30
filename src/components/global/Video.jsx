import { renderRichText, storyblokEditable } from "@storyblok/react"
export default function Video(props){

  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

  const titleHtml = renderRichText(props.blok.title)
  const descriptionHtml = renderRichText(props.blok.description)
  return(<div className="video" {...storyblokEditable(props.blok)}>
    <h2 className="video__title h2" dangerouslySetInnerHTML={{__html:titleHtml}}/>
    <iframe className="video__iframe" src={"https://www.youtube.com/embed/" + youtube_parser(props.blok.youtubeLink.url)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>)
}