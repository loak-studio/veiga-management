import { renderRichText, storyblokEditable } from "@storyblok/react";

export default function DocumentComponent({blok}:any) {
  const __html = renderRichText(blok.content);
  return (
    <article
      {...storyblokEditable(blok)}
      className="blog-post"
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}
