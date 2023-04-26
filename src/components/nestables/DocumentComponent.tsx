import { renderRichText, storyblokEditable } from "@storyblok/react";

export default function DocumentComponent({ blok }: any) {
  const __html = renderRichText(blok.content);
  return (
    <div className="document">
      <article
      {...storyblokEditable(blok)}
      className="blog-post richtext"
      dangerouslySetInnerHTML={{ __html }}
    />
    </div>
  );
}
