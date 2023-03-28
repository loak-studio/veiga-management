import "./button.css"
import {storyblokEditable} from "@storyblok/react"
export default function Button(props) {
  const href = props.blok?.link?.cached_url
  let currentStyle = props?.blok?.style ?? props.style
  let currentLabel = props?.blok?.label ?? props.label
  const Element = href ? 'a' : 'button'
  const getClass = (style) => {
    switch (style) {
      case "red":
        return "button__red"
        break;
      case "white":
        return "button__white"
        break;
      case "black":
        return "button__black"
        break;
      default:
        break;
    }
  }
  return (
    <Element {...storyblokEditable(props.blok)} href={"/" + href + "/"} className={"button"+ " " + getClass(currentStyle)}>
      <span className="text">{currentLabel}</span>
    </Element>
  )
}