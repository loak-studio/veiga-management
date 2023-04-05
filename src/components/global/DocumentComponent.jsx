import { renderRichText, storyblokEditable } from "@storyblok/react";

export default function DocumentComponent(props) {
  const __html = renderRichText(props.blok.content);
  return (
    <article
      {...storyblokEditable(props.blok)}
      className="blog-post"
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}
