import { renderRichText, storyblokEditable } from "@storyblok/react";

export default function TeamItem(props: any) {
  return (
    <div className="team-item" {...storyblokEditable(props.blok)}>
      <figure className="team-item__figure">
        <img
          width={208}
          height={208}
          src={props.blok.picture.filename + "/m/208x208/"}
          alt=""
        />
      </figure>
      <span className="h3 team-item__name">{props.blok.name}</span>
      <span className="text team-item__role">{props.blok.role}</span>
    </div>
  );
}
