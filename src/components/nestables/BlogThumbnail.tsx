import BackgroundImage from "../../assets/blog-background.webp";
import { parseDateToFrench } from "../../utils/parse-date-to-french";
import { renderRichText } from "@storyblok/js";
export default function BlogThumbnail({blok}: any) {
  const __html = renderRichText(blok.content.title);
  return (
    <article className="blog-thumbnail">
      {blok.content?.thumbnail?.filename && (
        <figure className="blog-thumbnail__figure">
          <img src={blok.content.thumbnail.filename} alt="" />
        </figure>
      )}
      {!blok.content?.thumbnail?.filename && (
        <div className="blog-thumbnail__figure">
          <figure className="blog-thumbnail-figure-background">
            <img src={BackgroundImage} alt="" />
          </figure>
          <div
            className="h5 blog-thumbnail__thumbnail-title richtext"
            dangerouslySetInnerHTML={{ __html }}
          />
        </div>
      )}
      <div className="blog-thumbnail__meta">
        <h3
          className="h5 blog-thumbnail__title richtext"
          dangerouslySetInnerHTML={{ __html }}
        />
        <div className="blog-thumbnail__footer-and-tag">
          <div className="h6 blog-thumbnail__tag">{blok.content.tag}</div>
          <div className="blog-thumbnail__footer text">
            <span className="blog-thumbnail__author">
              {blok.content.author}
            </span>
            <span>{parseDateToFrench(blok.content.date)}</span>
          </div>
        </div>
      </div>
      <a
        className="blog-thumbnail__link"
        href={"/blog/" + blok.slug + "/"}
      >
        <span className="blog-thumbnail__link-text sr-only">
          Lire l'article
        </span>
      </a>
    </article>
  );
}
