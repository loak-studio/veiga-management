import { storyblokEditable } from "@storyblok/react";
export default function CustomerItem({ blok }: any) {
  return (
    <li {...storyblokEditable(blok)} className="customer-item">
      <figure className="customer-item__figure">
        <img
          width={208}
          height={208}
          src={blok.picture.filename + "/m/208x208"}
          alt=""
        />
      </figure>
      <h3 className="customer-item__name h5">{blok.name}</h3>
      <span className="customer-item__role text">{blok.role}</span>
      <span className="customer-item__followers text bold">
        {blok.followersPrefix}
        <span className="customer-item__followers-count countup">
          {blok.followersValue}
        </span>
        {blok.followersSuffix} abonnés
      </span>
    </li>
  );
}
