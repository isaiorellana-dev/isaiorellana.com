import React from "react"
import "../styles/components/DevPortada.scss"
import ContactameDev from "./ContactameDev"

const DevPortada = () => {
  const [clase, setClase] = React.useState("hide")
  return (
    <section className="dev-portada">
      <div className="dev-portada--content">
        <h1>
          ISAI <span>ORELLANA</span>
        </h1>
        <p>Desarrollador Web Frontend</p>
        <button
          onClick={() => {
            setClase("formulario")
          }}
          className={clase === "hide" ? "contactame-btn" : "hide"}
        >
          Contactame ✉️
        </button>
        <ContactameDev clase={clase} />
      </div>
      <div className="detail-1"></div>
      <div className="detail-2"></div>
    </section>
  )
}

export default DevPortada
