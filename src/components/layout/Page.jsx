import { StoryblokComponent } from "@storyblok/react"
export default function Page({blok}){
  return <>
  {blok.body.map((blok)=><StoryblokComponent key={blok._uid} blok={blok}/>)}</>
}