import React from "react"
import { Link } from "react-router-dom"
import "../styles/containers/Portada.scss"

const Portada = () => {
  const dev = "<Desarrollo Web />"
  const ph = "Fotografia"

  return (
    <div className="portada">
      <div className="dev-side">
        <h2>{dev}</h2>
        <Link to="dev">=></Link>
      </div>
      <div className="ph-side">
        <h2>{ph}</h2>
        <Link to="ph">=></Link>
      </div>
    </div>
  )
}

export default Portada
