import React from "react"
import "../styles/components/Footer.scss"

const Footer = () => {
  return (
    <footer className="footer-ph">
      {/* <div className="footer-left">
        <ul>
          <a href="/">
            <li>INICIO</li>
          </a>
          <a href="portafolio">
            <li>PORTAFOLIO</li>
          </a>
          <a href="servicios">
            <li>SERVICIOS</li>
          </a>
          <a href="sobremi">
            <li>SOBRE MI</li>
          </a>
          <a href="contacto">
            <li>CONTACTO</li>
          </a>
        </ul>
      </div>
      <div className="linea" /> */}
      <div className="footer-rigth">
        <ul>
          <a
            href="https://www.instagram.com/isaiorellanaa/?r=nametag"
            target={"_blank"}
          >
            <li>Instagram</li>
          </a>
          <a
            href="https://www.facebook.com/Isa%C3%AD-Orellana-Fotograf%C3%ADa-Digital-100679205644720"
            target={"_blank"}
          >
            <li>Facebook</li>
          </a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
