import { renderRichText } from "@storyblok/react";
import Container from "../layout/ContainerBackgroundSpace.jsx";
import { parseDateToFrench } from "../../utils/parse-date-to-french";
export default function BlogPost(props) {
  const __html = renderRichText(props.blok.title);
  const content__html = renderRichText(props.blok.content);
  return (
    <article>
      <Container blok={{ arrow: false, display_icons: true }}>
        <div className="page-title h4">
          <span className="page-title__tag text">{props.blok.tag}</span>
          <div
            className="page-title__title h1"
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
        className="blog-post"
        dangerouslySetInnerHTML={{ __html: content__html }}
      />
    </article>
  );
}
