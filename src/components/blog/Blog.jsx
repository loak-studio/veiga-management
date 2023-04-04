import BlogThumbnail from "./BlogThumbnail.jsx"
let totalEntries
const data = await fetch("https://api.storyblok.com/v2/cdn/stories?starts_with=blog/&sort_by=content.date:desc&page=1&per_page=8&cv=1680250222&token="  + import.meta.env.PUBLIC_STORYBLOK_TOKEN + "&version=draft").then((response)=>
  {
    totalEntries = (new Headers(response.headers)).get('total')
    return response.json()
  }
)
export default function Blog({blok}){
  console.log()
  return (
    <section className="blog-container">
  <div className="blog">
  {data.stories.map((story,index )=>{
    if(story.content.component == "blog-post"){
      return <BlogThumbnail key={index} blok={story}/>
    }
  })}
</div>
</section>
  )
}