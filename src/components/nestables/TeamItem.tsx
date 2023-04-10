import { renderRichText, storyblokEditable } from "@storyblok/react";

export default function TeamItem({blok}: any) {
  return (
    <div className="team-item" {...storyblokEditable(blok)}>
      <figure className="team-item__figure">
        <img
          width={208}
          height={208}
          src={blok.picture.filename + "/m/208x208/"}
          alt=""
        />
      </figure>
      <span className="h3 team-item__name">{blok.name}</span>
      <span className="text team-item__role">{blok.role}</span>
    </div>
  );
}
