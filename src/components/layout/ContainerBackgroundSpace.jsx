import { StoryblokComponent } from "@storyblok/react"
import "./container.css"
export default function Container(props){

return(
  <div className={"container" + " " + (props.blok.display_icons ? 'container__icons' :'')}>
    {props.blok.blocks.map((b, index)=><StoryblokComponent key={index} blok={b}/>)}
  </div>
)
}