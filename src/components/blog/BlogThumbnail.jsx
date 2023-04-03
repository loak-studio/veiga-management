export default function BlogThumbnail(props){
  // console.log(props)
  return (
    <article>
      <a href={"/blog/" + props.blok.slug}>{props.blok.content.title}</a>
    </article>
  )
}