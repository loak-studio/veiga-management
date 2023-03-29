import { storyblokEditable, renderRichText } from "@storyblok/react"
export default function ServiceItem(props) {
  const descriptionHtml = renderRichText(props.blok.description)
  const testimonialHtml = renderRichText(props.blok.testimonial)
  console.log(props.blok?.titleBackgroundColor?.color)
  return <div style={{ background: props.blok.backgroundTransparent ? null : props.blok.backgroundColor.color }} className="service-item" {...storyblokEditable(props.blok)}>
    <figure className="service-item__background-image">
      <img src={props.blok.backgroundImage?.filename} alt="" />
    </figure>
    <div className="service-item__container">
      <h2  style={{background: props.blok?.titleBackgroundColor?.color}} className="service-item__title h5">{props.blok.title}</h2>
      <div className="service-item__body">
        <div className="service-item__aside" style={{color: props.blok?.textColor?.color}}>
          <figure className="service-item__customer-figure">
            <img src={props.blok.customerPicture.filename + "/m/300x300/"} alt="" />
          </figure>
          <span className="service-item__customer-role h6">
            {props.blok.role}
          </span>
          <ul className="service-item__links" style={{borderColor: props.blok?.textColor?.color}}>
            <li>
              <a target={"_blank"} href={props.blok.twitter.url}>twitter</a>
            </li>
          </ul>
          <span className="service-item__followers text bold">
            {props.blok.followers}
          </span>
        </div>
        <div className="service-item__content">
          <h3 className="service-item__customer-name h3" style={{color: props.blok?.textColor?.color}}>{props.blok.customerName}</h3>
          <div className="service-item__description text" style={{color: props.blok?.textColor?.color}} dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          <div className="service-item__testimonial text" style={{background: props.blok?.testimonialBackgroundColor?.color, color: props.blok?.testimonialColor?.color}} dangerouslySetInnerHTML={{ __html: testimonialHtml }} />
        </div>
      </div>
    </div>
  </div>
}