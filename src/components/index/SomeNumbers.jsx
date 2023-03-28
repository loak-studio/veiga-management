import { StoryblokComponent, storyblokEditable, renderRichText } from "@storyblok/react"
export default function SomeNumbers(props){
  const __html = renderRichText(props.blok.title)
    console.log(props.blok)
  return (
    <div className="some-numbers" {...storyblokEditable(props.blok)}>
      <h2 className="some-numbers__title h2" dangerouslySetInnerHTML={{__html}}/>
      <span className="some-numbers__description text">{props.blok.description}</span>
      <ul className="some-numbers__list">
      {props.blok.numbers.map((number,index)=><StoryblokComponent key={index} blok={number}/>)}
      </ul>
    </div>
  )
}