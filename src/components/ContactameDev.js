import React from "react"

const ContactameDev = ({ clase }) => {
  return (
    <form className={clase} name="contact">
      <input type="hidden" name="form-name" value="contact" />
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
          name="message"
          id="message"
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default ContactameDev
