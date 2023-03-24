import { storyblokEditable } from "@storyblok/react";
export default function Hero(props){
  return (<p {...storyblokEditable(props.blok)}>{props.blok.title}</p>)
}