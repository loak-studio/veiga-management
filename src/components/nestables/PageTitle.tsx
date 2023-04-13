import { storyblokEditable, renderRichText, StoryblokComponent } from "@storyblok/react";
export default function PageTitle({blok}:any) {
  const __html = renderRichText(blok.title);
  return (
    <div className={"page-title h4" + " " + blok.margins} {...storyblokEditable(blok)}>
      {blok.pretitle && (
        <span className="page-title__pretitle">{blok.pretitle}</span>
      )}
      <div
        className="page-title__title h1"
        dangerouslySetInnerHTML={{ __html }}
      />
      {blok.description && <p className="page-title__description text">{blok.description}</p>}
      {blok.buttons && 
        <div className="page-title__buttons">
          {blok.buttons.map((button:any)=><StoryblokComponent key={button._uid} blok={button}/>)}
        </div>
      }
    </div>
  );
}
