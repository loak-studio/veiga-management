import { storyblokEditable } from "@storyblok/react";
export default function SomeComponent({blok}){
  return (<p {...storyblokEditable(blok)}>some component {blok.headline ? blok.headline : 'empty'}</p>)
}