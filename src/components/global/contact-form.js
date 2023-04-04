import { doc } from "prettier";

console.log('loadé')
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      document.querySelector('.contact-form__form-sent').classList.add('contact-form__form-sent--visible')
    })
    .catch((error) => alert(error));
};

document
  .querySelector(".contact-form__form")
  .addEventListener("submit", handleSubmit);
