import { storyblokEditable } from "@storyblok/react"
export default function ServiceItem(props){
  return <div {...storyblokEditable(props.blok)}>
    Service Item
  </div>
}