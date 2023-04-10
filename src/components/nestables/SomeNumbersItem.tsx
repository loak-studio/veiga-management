import { storyblokEditable } from "@storyblok/react";

export default function SomeNumbersItem(props) {
  const items = props.blok.number.match(/[^0-9]/g);
  let numberValue = props.blok.number.replace(/[^0-9]/g, "");
  return (
    <li className="some-numbers-item" {...storyblokEditable(props.blok)}>
      <span className="some-numbers-item__number h1">
        {items?.length > 0 && items[0]}
        <span data-value={numberValue} className="value">
          {numberValue}
        </span>
        {items?.length > 1 && items[1]}
      </span>
      <span className="some-numbers-item__label h6">
        <span>{props.blok.label}</span>
      </span>
    </li>
  );
}
