import React from "react"
import "../styles/Welcome.scss"
import myself from "../assets/img/isai 2.png"

const Welcome = (props) => {
  return (
    <div className="intro-isai">
      <picture>
        <img
          src={myself}
          alt="Isai Orellana"
          className={props.loading ? "hide" : null}
        />
      </picture>
      {props.loading && (
        <div className="loader">
          <div></div>
        </div>
      )}
      <div className="isai-titulo">
        <h2>Isaí Orellana.</h2>
        <p>Fotógrafo Profesional.</p>
      </div>
      <p className="description">
        Bienvenido a mi página web, aquí podrás ver mi trabajo y los detalles de
        los servicios que ofrezco.
      </p>
    </div>
  )
}

export default Welcome
