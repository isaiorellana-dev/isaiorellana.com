import React from "react"
import { Link } from "react-router-dom"
import DevPortada from "../components/DevPortada"
import { AboutMe } from "../components/AboutMe"
import Tecnologias from "../components/Tecnologias"
import Projects from "../components/Projects"
import DevFooter from "../components/DevFooter"
import "../styles/pages/Developer.scss"

const Developer = () => {
  const [scroll, setScroll] = React.useState(0)

  window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop
    setScroll(scrollTop)
  })
  console.log(scroll)

  return (
    <>
      <Link
        to="/"
        className="back-dev"
        style={scroll > 60 ? { opacity: "0.5" } : { opacity: "1" }}
      >
        Back
      </Link>
      <DevPortada />
      <AboutMe />
      <Tecnologias />
      <Projects />
      <DevFooter />
    </>
  )
}

export default Developer
