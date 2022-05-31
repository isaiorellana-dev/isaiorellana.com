import React from "react"
import DevPortada from "../components/DevPortada"
import { AboutMe } from "../components/AboutMe"
import Tecnologias from "../components/Tecnologias"
import Projects from "../components/Projects"
import DevFooter from "../components/DevFooter"

const Developer = () => {
  return (
    <>
      <DevPortada />
      <AboutMe />
      <Tecnologias />
      <Projects />
      <DevFooter />
    </>
  )
}

export default Developer
