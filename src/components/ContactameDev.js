import React from "react"

const ContactameDev = ({ clase }) => {
  return (
    <form className={clase}>
      <h2>Envíame un Mensaje</h2>
      <div className="from">
        <label htmlFor>De:</label>
        <input placeholder="micorreo@dominio.com"></input>
      </div>
      <div className="message">
        <label htmlFor>Mensaje:</label>
        <textarea placeholder="Hola Isaí, me contacto contigo porque..."></textarea>
      </div>
      <button>Enviar</button>
    </form>
  )
}

export default ContactameDev
