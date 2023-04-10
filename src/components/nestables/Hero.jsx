
import {
  StoryblokComponent,
  storyblokEditable,
  renderRichText,
} from "@storyblok/react";

export default function Hero(props) {
  const __html = renderRichText(props.blok.description);
  return (
    <div className="hero" {...storyblokEditable(props?.blok)}>
      <figure className="hero__logo">
        <img width={430} height={209} src={props.blok.logo.filename} alt="" />
      </figure>
      <h1 className="h1 hero__title">{props?.blok?.title}</h1>
      <div
        className="text hero__richtext"
        dangerouslySetInnerHTML={{ __html }}
      ></div>
      <div className="hero__buttons">
        {props.blok.content.map((button, index) => (
          <StoryblokComponent blok={button} key={index} />
        ))}
      </div>
    </div>
  );
}
