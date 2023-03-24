import { StoryblokComponent } from "@storyblok/react"
import "./container.css"
export default function Container(props){
return(
  <div className="container">
    {props.children}
    {props.blok.blocks.map(b=><StoryblokComponent blok={b}/>)}
  </div>
)
}