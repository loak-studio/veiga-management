const form = document.querySelector(".contact-form__form") as HTMLFormElement;
if (form) {
  const handleSubmit = (event : SubmitEvent) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        const sentElement = document.querySelector(".contact-form__form-sent") as HTMLElement
          sentElement.classList.add("contact-form__form-sent--visible");
      })
      .catch((error) => alert(error));
  };
  form.addEventListener("submit", handleSubmit);
}
