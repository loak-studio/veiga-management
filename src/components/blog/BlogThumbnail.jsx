export default function BlogThumbnail(props){
  console.log(props)
  return (
    <article>
      post {props.blok.content.title}
    </article>
  )
}