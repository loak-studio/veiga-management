import { storyblokEditable } from "@storyblok/react"
export default function Video(props){
  return(<div {...storyblokEditable(props.blok)}>video</div>)
}