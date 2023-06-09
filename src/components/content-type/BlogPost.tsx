import { renderRichText } from "@storyblok/react";
import Container from "../nestables/ContainerBackgroundSpace.js";
import { parseDateToFrench } from "../../utils/parse-date-to-french.js";
export default function BlogPost(props: any) {
  const __html = renderRichText(props.blok.title);
  const content__html = renderRichText(props.blok.content, {
    resolver: (component, blok) => {
      switch (component) {
        case "ImageWithCaption":
          return `<figure class="image-with-caption text"><img alt="${blok.caption}" src="${blok.image.filename}"/><figcaption>${blok.caption}</figcaption></figure>`;
        case "Caption":
          return `
            <figure class="caption">
              <blockquote class="text">${blok.caption}</blockquote>
              <figcaption class="text bold">${blok.author}</figcaption>
            </figure>
          `;
        default:
          break;
      }
      return component;
    },
  });
  return (
    <article className="blog-post__article">
      <Container blok={{ arrow: false, display_icons: true }}>
        <div className="page-title h4">
          <span className="page-title__tag text">{props.blok.tag}</span>
          <div
            className="page-title__title h1 richtext"
            dangerouslySetInnerHTML={{ __html }}
          />
          <div className="page-title__post-title">
            <span className="page-title__author text">
              By {props.blok.author}
            </span>
            <span className="page-title__date text">
              {parseDateToFrench(props.blok.date)}
            </span>
          </div>
        </div>
      </Container>
      <article
        className="blog-post richtext"
        dangerouslySetInnerHTML={{ __html: content__html }}
      />
    </article>
  );
}
