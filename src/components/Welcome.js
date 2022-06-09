import React from "react"
import "../styles/components/Welcome.scss"
import myself from "../assets/img/IMG_0136-Editar-2.png"

const Welcome = (props) => {
  const [clase, setClase] = React.useState("hide")
  return (
    <div className="intro-isai">
      <picture>
        <img
          src={myself}
          alt="Isai Orellana"
          className={props.loading ? "hide" : null}
        />
      </picture>
      <div className="isai-titulo">
        <h2>Isaí Orellana.</h2>
        <p>Fotógrafo Profesional.</p>
        <button
          onClick={() => {
            props.setClase("card-contacto")
          }}
          className={props.clase === "hide" ? "contactame-btn" : "hide"}
        >
          Contactame
        </button>
      </div>
    </div>
  )
}

export default Welcome
