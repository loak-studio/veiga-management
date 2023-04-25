
import { renderRichText, storyblokEditable } from "@storyblok/react";

export default function HeroServiceItem({blok}:any) {
  const __html = renderRichText(blok.title);
  return (
    <li className="hero-service-item" {...storyblokEditable(blok)}>
      <figure className="hero-service-item__figure">
        <img src={blok.icon.filename} alt="" />
      </figure>
      <div
        className="hero-service-item__text h6 richtext"
        dangerouslySetInnerHTML={{ __html }}
      />
    </li>
  );
}
