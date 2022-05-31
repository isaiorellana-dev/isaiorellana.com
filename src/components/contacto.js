const $form = document.querySelector("#contacto");

$form.addEventListener("submit", handlesubmit);

async function handlesubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "aplication/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Tu mensaje ha sido enviado, gracias por contactarme.");
  }
}

export default handlesubmit;
