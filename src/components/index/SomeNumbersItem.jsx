import { storyblokEditable } from "@storyblok/react";

export default function SomeNumbersItem(props){
  return(<div className="some-numbers-item" {...storyblokEditable(props.blok)}>
    <span className="some-numbers-item__number h1">{props.blok.number}</span>
    <span className="some-numbers-item__label h6">
      <span>{props.blok.label}</span>
    </span>
  </div>)
}