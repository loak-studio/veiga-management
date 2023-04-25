
import {
  StoryblokComponent,
  storyblokEditable,
  renderRichText,
} from "@storyblok/react";

export default function Hero({blok}:any) {
  const __html = renderRichText(blok.description);
  return (
    <div className="hero" {...storyblokEditable(blok)}>
      <figure className="hero__logo">
        <img width={430} height={209} src={blok.logo.filename} alt="" />
      </figure>
      <h1 className="h1 hero__title">{blok?.title}</h1>
      <div
        className="text hero__richtext richtext"
        dangerouslySetInnerHTML={{ __html }}
      ></div>
      <div className="hero__buttons">
        {blok.content.map((button:any, index:any) => (
          <StoryblokComponent blok={button} key={index} />
        ))}
      </div>
    </div>
  );
}
