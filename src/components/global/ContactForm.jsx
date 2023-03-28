import { storyblokEditable, renderRichText, StoryblokComponent } from "@storyblok/react"
import Input from "./Input"
import Button from "../layout/Button.jsx"
export default function ContactForm(props){
  const __html = renderRichText(props.blok.title)
  return (<div className={"contact-form" + (props.blok.full_width ? ' ' + 'contact-form--full-width':'')} {...storyblokEditable(props.blok)}>
    <div className="contact-form__container">
    <div className="contact-form__aside">
      <h2 className="contact-form__title h2" dangerouslySetInnerHTML={{__html}}/>
      <p className="contact-form__description text">{props.blok.description}</p>
      <div className="contact-form__buttons">
        {props.blok.buttons.map((button,index)=><StoryblokComponent key={index} blok={button}/>)}
      </div>
    </div>
    <form className="contact-form__form" action="">
      <Input name="lastname" id="lastname" label="Nom" required/>
      <Input name="firstname" id="firstname" label="Prénom" required/>
      <Input name="email" id="email" label="E-mail" type="email" required/>
      <Input name="subject" id="subject" label="Objet"/>
      <Input name="message" id="message" label="Votre demande" type="textarea"/>
      <Button style="red" label="Envoyer mon message"/>
    </form>
    </div>
  </div>)
}