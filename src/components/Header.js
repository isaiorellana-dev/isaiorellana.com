import React from "react"
import { Link } from "react-router-dom"
import "../styles/Header.scss"

const Header = () => {
  const [windowSize, setWindowSize] = React.useState(window.innerWidth)
  const [toggleMenu, setToggleMenu] = React.useState(false)
  window.addEventListener("resize", () => setWindowSize(window.innerWidth))

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  const isMobile = () => {
    if (windowSize < 920) {
      return true
    } else {
      return false
    }
  }

  return (
    <header>
      <p>
        ISAI<span>ORELLANA</span>
      </p>

      <nav id="navegador" className={`nav show`}>
        <ul>
          <Link to="/">
            <li>INICIO</li>
          </Link>
          {/* <a href="portafolio">
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
          </a> */}
        </ul>
      </nav>
      {isMobile() ? (
        <button
          name="menu"
          className={`${toggleMenu ? "equis" : "menu"}`}
          id="btnMenu"
          onClick={handleToggleMenu}
        />
      ) : null}
    </header>
  )
}

export default Header
