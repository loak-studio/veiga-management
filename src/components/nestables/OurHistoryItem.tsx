import { storyblokEditable, renderRichText } from "@storyblok/react";
export default function OurHistoryItem({blok}:any) {
  return (
    <div className="our-history-item" {...storyblokEditable(blok)}>
      {blok.title && (
        <h2 className="our-history-item__title h2">{blok.title}</h2>
      )}
      <figure className="our-history-item__figure">
        <img
          width={1400}
          height={800}
          src={blok.picture.filename + "/m/1400x800/"}
          alt={blok.picture.alt}
        />
      </figure>
      <span className="our-history-item__year h3">{blok.year}</span>
      <div
        className="our-history-item__description text richtext"
        dangerouslySetInnerHTML={{
          __html: renderRichText(blok.description),
        }}
      />
    </div>
  );
}
