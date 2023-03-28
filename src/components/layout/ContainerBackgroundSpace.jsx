import "./container.css"
import { StoryblokComponent } from "@storyblok/react"
import smallFacebook from "../../assets/hero/facebook_petit.png"
import bigInstagram from "../../assets/hero/instagram_grand.png"
import bigPinterest from "../../assets/hero/pinterest_grand.png"
import rightSmartphone from "../../assets/hero/smartphone_droite.png"
import leftSmartphone from "../../assets/hero/smartphone_gauche.png"
import bigTiktok from "../../assets/hero/tiktok_grand.png"
import smallTiktok from "../../assets/hero/tiktok_petit.png"
import smallTwitter from "../../assets/hero/twitter_petit.png"
import bigTwitter from "../../assets/hero/twitter_grand.png"
import bigYoutube from "../../assets/hero/youtube_grand.png"
import smallYoutube from "../../assets/hero/youtube_petit.png"

const images = [
  {
    className:"small-facebook",
    asset: smallFacebook
  },
  {
    className:"big-instagram",
    asset: bigInstagram
  },
  {
    className:"big-pinterest",
    asset: bigPinterest
  },
  {
    className:"right-smartphone",
    asset: rightSmartphone
  },
  {
    className:"left-smartphone",
    asset: leftSmartphone
  },
  {
    className:"big-tiktok",
    asset: bigTiktok
  },
  {
    className:"small-tiktok",
    asset: smallTiktok
  }, 
  {
    className:"small-twitter",
    asset: smallTwitter
  }, 
  {
    className:"big-twitter",
    asset: bigTwitter
  }, 
  {
    className:"big-youtube",
    asset: bigYoutube
  }, 
  {
    className:"small-youtube",
    asset: smallYoutube
  }, 
]

export default function Container(props){

return(
  <div className={"container" + " " + (props.blok.display_icons ? 'container__icons' :'') + (props.blok.arrow ?" " + 'container__arrow' : '')}>
    <div className="container__content">
    {props.blok.blocks.map((b, index)=><StoryblokComponent key={index} blok={b}/>)}
    </div>
    {props.blok.display_icons && 
    images.map((image,index)=><figure className={"container__icon" + " " + image.className}><img src={image.asset} alt="" /></figure>)
    }
  </div>
)
}