import {
  renderRichText,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";
export default function Customers({ blok }: any) {
  const __html = renderRichText(blok.title);
  return (
    <div
      className={"customers h2" + (blok.arrow ? " customers__arrow" : "")}
      {...storyblokEditable(blok)}
    >
      <h2
        className="customers__title richtext"
        dangerouslySetInnerHTML={{ __html }}
      />
      <ul className="customers__list">
        {blok.Customers.map((customer: any, index: number) => (
          <StoryblokComponent key={index} blok={customer} />
        ))}
      </ul>
      <ul className="customers__brands">
        {blok.brands.map((brand: any, index: number) => (
          <li key={index} className="customers__brand">
            <figure title={brand.alt} className="customers__brand-logo">
              <img loading="lazy" alt={brand.alt} src={brand.filename} />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
