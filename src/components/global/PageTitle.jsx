import { storyblokEditable, renderRichText, StoryblokComponent } from "@storyblok/react";
export default function PageTitle(props) {
  const __html = renderRichText(props.blok.title);
  return (
    <div className="page-title h4" {...storyblokEditable(props.blok)}>
      {props.blok.pretitle && (
        <span className="page-title__pretitle">{props.blok.pretitle}</span>
      )}
      <div
        className="page-title__title h1"
        dangerouslySetInnerHTML={{ __html }}
      />
      {props.blok.description && <p className="page-title__description text">{props.blok.description}</p>}
      {props.blok.buttons && 
        <div className="page-title__buttons">
          {props.blok.buttons.map((button)=><StoryblokComponent key={button._uid} blok={button}/>)}
        </div>
      }
    </div>
  );
}
