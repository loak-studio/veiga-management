import { storyblokEditable, renderRichText } from "@storyblok/react"
export default function PageTitle(props){
  console.log('PAGE----TITLE',JSON.stringify(props.blok, null, 2))
  const __html = renderRichText(props.blok.title)
  return (<div className="page-title h4" {...storyblokEditable(props.blok)}>
    {props.blok.pretitle && <span className="page-title__pretitle">
        {props.blok.pretitle}
      </span>}
    <div className="page-title__title h1" dangerouslySetInnerHTML={{__html}}/>
  </div>)
}