import React from "react"
import "../styles/Contact.scss"

const Contact = () => {
  return (
    <article className="card-contacto">
      <h2>Contacto</h2>
      <p>
        Puedes enviarme un mensaje directo a mi{" "}
        <a href="https://api.whatsapp.com/send?phone=50495497605&app=facebook&entry_point=page_cta">
          WhatsApp
        </a>
        .
      </p>
      <p>También puedes enviarme un mensaje a mi correo electrónico:</p>
      <form id="contacto" name="contact-ph" method="post" autoComplete="on">
        <input type="hidden" name="form-name" value="contact-ph" />
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="nombre"
            required
            placeholder="Escribe aqui tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="correo"
            required
            placeholder="Escribe aqui tu correo electronico"
          />
        </div>
        <div className="mensaje">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            name="message"
            cols={30}
            rows={10}
            required
            placeholder="Escribe aqui tu mensaje"
            defaultValue={""}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </article>
  )
}

export default Contact
