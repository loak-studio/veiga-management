import { storyblokEditable } from "@storyblok/react"
import BlogThumbnail from "./BlogThumbnail"
const data = await fetch("https://api.storyblok.com/v2/cdn/stories?starts_with=blog/&cv=1680250222&token="  + import.meta.env.PUBLIC_STORYBLOK_TOKEN + "&version=draft").then((response)=>
  response.json()
)

export default function Blog(props) {

  return <section className="blog-container">
    <div className="blog" {...storyblokEditable(props.blok)}>
    {data.stories.map((story,index)=>{
      if(story.content.component == "blog-post"){
        return <BlogThumbnail key={index} blok={story}/>
      }
    })}
  </div>
  </section>
}