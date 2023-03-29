import "./hero-service-item.css";
import { renderRichText, storyblokEditable } from "@storyblok/react";

export default function HeroServiceItem(props) {
  const __html = renderRichText(props.blok.title);
  return (
    <div className="hero-service-item" {...storyblokEditable(props.blok)}>
      <figure className="hero-service-item__figure">
        <img src={props.blok.icon.filename} alt="" />
      </figure>
      <div
        className="hero-service-item__text h6"
        dangerouslySetInnerHTML={{ __html }}
      />
    </div>
  );
}
