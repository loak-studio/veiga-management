
import {
  renderRichText,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";

export default function OurServices({blok}:any) {
  const __html = renderRichText(blok.title);
  return (
    <div className="our-services" {...storyblokEditable(blok)}>
      <h2
        className="our-services__title h2"
        dangerouslySetInnerHTML={{ __html }}
      ></h2>
      <p className="our-services__description text">{blok.description}</p>
      <ul className="our-services__items">
        {blok.services.map((service:any, index:number) => (
          <StoryblokComponent key={index} blok={service} />
        ))}
      </ul>
    </div>
  );
}
