import { StoryblokComponent } from "@storyblok/react";
import smallFacebook from "../../assets/hero/facebook_petit.png";
import bigInstagram from "../../assets/hero/instagram_grand.png";
import bigPinterest from "../../assets/hero/pinterest_grand.png";
import rightSmartphone from "../../assets/hero/smartphone_droite.png";
import leftSmartphone from "../../assets/hero/smartphone_gauche.png";
import bigTiktok from "../../assets/hero/tiktok_grand.png";
import smallTiktok from "../../assets/hero/tiktok_petit.png";
import smallTwitter from "../../assets/hero/twitter_petit.png";
import bigTwitter from "../../assets/hero/twitter_grand.png";
import bigYoutube from "../../assets/hero/youtube_grand.png";
import smallYoutube from "../../assets/hero/youtube_petit.png";

import smallFacebookWebp from "../../assets/hero/facebook_petit.webp";
import bigInstagramWebp from "../../assets/hero/instagram_grand.webp";
import bigPinterestWebp from "../../assets/hero/pinterest_grand.webp";
import rightSmartphoneWebp from "../../assets/hero/smartphone_droite.webp";
import leftSmartphoneWebp from "../../assets/hero/smartphone_gauche.webp";
import bigTiktokWebp from "../../assets/hero/tiktok_grand.webp";
import smallTiktokWebp from "../../assets/hero/tiktok_petit.webp";
import smallTwitterWebp from "../../assets/hero/twitter_petit.webp";
import bigTwitterWebp from "../../assets/hero/twitter_grand.webp";
import bigYoutubeWebp from "../../assets/hero/youtube_grand.webp";
import smallYoutubeWebp from "../../assets/hero/youtube_petit.webp";

const images = [
  {
    className: "small-facebook from-right",
    asset: smallFacebook,
    width: 135,
    height: 129,
    webp: smallFacebookWebp,
    value: 5,
  },
  {
    className: "big-instagram from-right",
    asset: bigInstagram,
    width: 177,
    height: 175,
    webp: bigInstagramWebp,
    value: 4,
  },
  {
    className: "big-pinterest from-left",
    asset: bigPinterest,
    width: 155,
    height: 150,
    webp: bigPinterestWebp,
    value: 3,
  },
  {
    className: "right-smartphone from-right",
    asset: rightSmartphone,
    width: 415,
    height: 568,
    webp: rightSmartphoneWebp,
    value: 2,
  },
  {
    className: "left-smartphone from-left",
    asset: leftSmartphone,
    width: 315,
    height: 358,
    webp: leftSmartphoneWebp,
    value: 1,
  },
  {
    className: "big-tiktok from-right",
    asset: bigTiktok,
    width: 230,
    height: 232,
    webp: bigTiktokWebp,
    value: 2,
  },
  {
    className: "small-tiktok from-left",
    asset: smallTiktok,
    width: 83,
    height: 82,
    webp: smallTiktokWebp,
    value: 3,
  },
  {
    className: "small-twitter from-left",
    asset: smallTwitter,
    width: 121,
    height: 123,
    webp: smallTwitterWebp,
    value: 4,
  },
  {
    className: "big-twitter from-left",
    asset: bigTwitter,
    width: 245,
    height: 243,
    webp: bigTwitterWebp,
    value: 5,
  },
  {
    className: "big-youtube from-right",
    asset: bigYoutube,
    width: 258,
    height: 274,
    webp: bigYoutubeWebp,
    value: 8,
  },
  {
    className: "small-youtube from-left",
    asset: smallYoutube,
    width: 116,
    height: 109,
    webp: smallYoutubeWebp,
    value: 6,
  },
];

export default function Container(props: any) {
  return (
    <div
      className={
        "container" +
        " " +
        (props.blok.display_icons ? "container__icons" : "") +
        (props.blok.arrow ? " " + "container__arrow" : "")
      }
    >
      {props.children && props.children}
      {!props.children && (
        <div className="container__content">
          {props.blok?.blocks?.map((b: any, index: number) => (
            <StoryblokComponent key={index} blok={b} />
          ))}
        </div>
      )}
      <div className="container__icons-container">
        {props.blok.display_icons &&
          images.map((image, index) => (
            <figure
              key={index}
              className={"container__icon" + " " + image.className}
              data-parallax={image.value}
            >
              <picture>
                <source srcSet={image.webp} type="image/webp" />
                <img
                  width={image.width}
                  height={image.height}
                  src={image.asset}
                  alt=""
                />
              </picture>
            </figure>
          ))}
      </div>
    </div>
  );
}
