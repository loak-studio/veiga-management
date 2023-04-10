
import { storyblokEditable } from "@storyblok/react";
import {cleanHref} from "../../utils/clean-href"
export default function Button(props:any) {
  const href = props.blok?.link?.cached_url;
  let currentStyle = props?.blok?.style ?? props.style;
  let currentLabel = props?.blok?.label ?? props.label;
  const Element = href ? "a" : "button";
  const getClass = (style: string) => {
    switch (style) {
      case "red":
        return "button__red";
      case "white":
        return "button__white";
      case "black":
        return "button__black";
      default:
        break;
    }
  };
  return (
    <Element
      {...storyblokEditable(props.blok)}
      href={href ? cleanHref(href) : undefined}
      className={"button" + " " + getClass(currentStyle)}
    >
      <span className="text">{currentLabel}</span>
    </Element>
  );
}
