import React from "react"
import { Link } from "react-router-dom"
import "../styles/components/DevPortada.scss"

const DevPortada = () => {
  return (
    <section className="dev-portada">
      <h1>
        ISAI <span>ORELLANA</span>
      </h1>
      <p>Desarrollador Web Frontend</p>
      <Link to="" className="contactame-btn">
        Contactame ✉️
      </Link>
    </section>
  )
}

export default DevPortada
