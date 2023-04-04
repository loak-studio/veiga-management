
import BackgroundImage from "../../assets/blog-background.webp"
import {parseDateToFrench} from "../../utils/parse-date-to-french"
import { renderRichText } from "@storyblok/react"
export default function BlogThumbnail(props){
  const __html = renderRichText(props.blok.content.title)
  return(
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
      <div className="h5 blog-thumbnail__thumbnail-title" dangerouslySetInnerHTML={{__html}}/>
    </div>
  }
  <div className="blog-thumbnail__meta">
    <h3 className="h5 blog-thumbnail__title" dangerouslySetInnerHTML={{__html}} />
    <div className="blog-thumbnail__footer-and-tag">
      <div className="h6 blog-thumbnail__tag">
        {props.blok.content.tag}
      </div>
      <div className="blog-thumbnail__footer text">
        <span className="blog-thumbnail__author">{props.blok.content.author}</span>
        <span>{parseDateToFrench(props.blok.content.date)}</span>
      </div>
    </div>
  </div>
  <a className="blog-thumbnail__link" href={"/blog/" + props.blok.slug + "/"}>
    <span className="blog-thumbnail__link-text sr-only">Lire l'article</span>
  </a>
</article>
  )
}