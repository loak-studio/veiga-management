import "./button.css"
export default function Button(props) {
  const href = props.blok?.link?.cached_url
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
    <Element href={"/" + href + "/"} className={"button"+ " " + getClass(props.blok.style)}>
      <span className="text">{props.blok.label}</span>
    </Element>
  )
}