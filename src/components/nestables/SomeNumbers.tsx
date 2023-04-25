import {
  StoryblokComponent,
  storyblokEditable,
  renderRichText,
} from "@storyblok/react";
export default function SomeNumbers({blok}:any) {
  const __html = renderRichText(blok.title);
  return (
    <div
      className={
        "some-numbers" + (blok.arrow ? " " + "some-numbers__arrow" : "")
      }
      {...storyblokEditable(blok)}
    >
      <h2
        className="some-numbers__title h2 richtext"
        dangerouslySetInnerHTML={{ __html }}
      />
      <span className="some-numbers__description text">
        {blok.description}
      </span>
      <ul className="some-numbers__list">
        {blok.numbers.map((number:any, index:number) => (
          <StoryblokComponent key={index} blok={number} />
        ))}
      </ul>
    </div>
  );
}
