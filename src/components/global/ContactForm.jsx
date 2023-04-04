import {
  storyblokEditable,
  renderRichText,
  StoryblokComponent,
} from "@storyblok/react";
import Input from "./Input";
import Button from "../layout/Button.jsx";
export default function ContactForm(props) {
  const __html = renderRichText(props.blok.title);
  return (
    <div
      className={
        "contact-form" +
        (props.blok.full_width ? " " + "contact-form--full-width" : "")
      }
      {...storyblokEditable(props.blok)}
    >
      <div className="contact-form__container">
        <div className="contact-form__aside">
          <h2
            className="contact-form__title h2"
            dangerouslySetInnerHTML={{ __html }}
          />
          <p className="contact-form__description text">
            {props.blok.description}
          </p>
          <div className="contact-form__buttons">
            {props.blok.buttons.map((button, index) => (
              <StoryblokComponent key={index} blok={button} />
            ))}
          </div>
        </div>
        <form method="POST" data-netlify="true" className="contact-form__form" action="/contact/?send=true" name="contact">
          <Input name="name" id="name" label="Nom" required />
          <Input name="email" id="email" label="E-mail" type="email" required />
          <Input name="subject" id="subject" label="Objet" required />
          <Input
            name="message"
            id="message"
            label="Votre demande"
            type="textarea"
            required
          />
          <Button style="red" label="Envoyer mon message" />
          <div className="contact-form__form-sent">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkbox" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="9 11 12 14 20 6" />
  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
</svg>
            <span className="h3">Votre message a été envoyé</span>
            <p className="text">Nous reviendrons vers vous dans les plus brefs délais.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
