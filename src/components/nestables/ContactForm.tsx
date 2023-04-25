import {
  storyblokEditable,
  renderRichText,
  StoryblokComponent,
} from "@storyblok/react";
import Input from "./Input";
import Button from "./Button"
export default function ContactForm({blok}:any) {
  const __html = renderRichText(blok.title);
  return (
    <div
      className={
        "contact-form" +
        (blok.full_width ? " " + "contact-form--full-width" : "")
      }
      {...storyblokEditable(blok)}
    >
      <div className="contact-form__container">
        <div className="contact-form__aside">
          <h2
            className="contact-form__title h2 richtext"
            dangerouslySetInnerHTML={{ __html }}
          />
          <p className="contact-form__description text">
            {blok.description}
          </p>
          <div className="contact-form__buttons">
            {blok.buttons.map((button:any, index:number) => (
              <StoryblokComponent key={index} blok={button} />
            ))}
          </div>
        </div>
        <form
          method="POST"
          data-netlify="true"
          className="contact-form__form"
          action="/contact/?send=true"
          name="contact"
        >
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
          <label className="contact-form__cgv" htmlFor="cgv">
            <input required type="checkbox" name="cgv" id="cgv" />
            <p className="text">
            En soumettant ce formulaire, vous acceptez que les informations que vous fournissez soient utilisées dans le cadre de votre demande de contact. En cochant cette case, vous confirmez que vous avez lu et compris notre <a className="link" href="/politique-de-confidentialite/">politique de confidentialité</a> et que vous acceptez que nous utilisions vos données personnelles dans les conditions décrites.
            </p>
          </label>
          <Button style="red" label="Envoyer mon message" />
          <div className="contact-form__form-sent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-checkbox"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 11 12 14 20 6" />
              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
            </svg>
            <span className="h3">Votre message a été envoyé</span>
            <p className="text">
              Nous reviendrons vers vous dans les plus brefs délais.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
