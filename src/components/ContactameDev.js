import React from "react"

const ContactameDev = ({ clase }) => {
  return (
    <form className={clase} name="contacto-isai-dev" netlify>
      <h2>Envíame un Mensaje</h2>
      <div className="from">
        <label htmlFor="email">De:</label>
        <input
          placeholder="micorreo@dominio.com"
          type="email"
          name="email"
          id="email"
        ></input>
      </div>
      <div className="message">
        <label htmlFor="message">Mensaje:</label>
        <textarea
          placeholder="Hola Isaí, me contacto contigo porque..."
          type="message"
          name="message"
          id="message"
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default ContactameDev
