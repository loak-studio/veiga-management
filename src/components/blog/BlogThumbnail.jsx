import { renderRichText } from "@storyblok/react"
import BackgroundImage from "../../assets/blog-background.webp"
export default function BlogThumbnail(props) {
  // console.log(props)
  console.log(props.blok.content)
  const date = new Date(props.blok.content.date)
  const title = renderRichText(props.blok.content.title)
  return (
    <article className="blog-thumbnail">
      {props.blok.content?.thumbnail?.filename &&
        <figure className="blog-thumbnail__figure">
          <img src={props.blok.content.thumbnail.filename} alt="" />
        </figure>
      }
      {!props.blok.content?.thumbnail?.filename &&
        <div className="blog-thumbnail__figure">
          <figure className="blog-thumbnail-figure-background">
            <img src={BackgroundImage} alt="" />
          </figure>
          <div className="h5 blog-thumbnail__thumbnail-title" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      }
      <div className="blog-thumbnail__meta">
        <h3 className="h5 blog-thumbnail__title" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="blog-thumbnail__footer-and-tag">
          <div className="h6 blog-thumbnail__tag">
            {props.blok.content.tag}
          </div>
          <div className="blog-thumbnail__footer text">
            <span className="blog-thumbnail__author">{props.blok.content.author}</span>
            <span>{date.toLocaleDateString('fr', { day: "2-digit", month: 'long', year: "numeric" })}</span>
          </div>
        </div>
      </div>
      <a className="blog-thumbnail__link" href={"/blog/" + props.blok.slug + "/"}>
        <span className="blog-thumbnail__link-text sr-only">Lire l'article</span>
      </a>
    </article>
  )
}