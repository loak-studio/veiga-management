import "./container.css";
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

const images = [
  {
    className: "small-facebook from-right",
    asset: smallFacebook,
  },
  {
    className: "big-instagram from-right",
    asset: bigInstagram,
  },
  {
    className: "big-pinterest from-left",
    asset: bigPinterest,
  },
  {
    className: "right-smartphone from-right",
    asset: rightSmartphone,
  },
  {
    className: "left-smartphone from-left",
    asset: leftSmartphone,
  },
  {
    className: "big-tiktok from-right",
    asset: bigTiktok,
  },
  {
    className: "small-tiktok from-left",
    asset: smallTiktok,
  },
  {
    className: "small-twitter from-left",
    asset: smallTwitter,
  },
  {
    className: "big-twitter from-left",
    asset: bigTwitter,
  },
  {
    className: "big-youtube from-right",
    asset: bigYoutube,
  },
  {
    className: "small-youtube from-left",
    asset: smallYoutube,
  },
];

export default function Container(props) {
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
          {props.blok?.blocks?.map((b, index) => (
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
            >
              <img src={image.asset} alt="" />
            </figure>
          ))}
      </div>
    </div>
  );
}
