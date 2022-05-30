import React from "react"
import { Link, Outlet } from "react-router-dom"
import "../styles/components/AboutMe.scss"

export const MoreAboutME = () => {
  return (
    <p className="more-about-me">
      A los 18 años despertó mi interés por la programación mientras cursaba
      bachillerato en informática en mi colegio, una serie de proyectos
      orientados al desarrollo web fueron los que me llevaron a tener que
      investigar acerca del tema, después de esos trabajos empece a buscar una
      plataforma donde pudiera estudiar desarrollo web y termine subscribiéndome
      a Platzi. A dia de hoy ya he hecho algunos proyectos tanto personales como
      para clientes de manera independiente, me estoy especializando en React y
      también estoy entrando poco a poco en el backend. <br></br> Isaí Orellana
      [Honduras]
    </p>
  )
}

export const AboutMe = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <section className="about-me">
      <h2>Un poco sobre mí</h2>
      <p>
        Vivo programando y aprendiendo a programar, siempre trato de encontrar
        maneras de hacer mas efectivo el uso de mi tiempo, me gusta mucho la
        fotografía y en mi tiempo libre hago ejercicio.
      </p>
      <Outlet />
      <Link to={open ? "" : "/dev/aboutme"} onClick={handleOpen}>
        {open ? "Leer menos" : "Leer más"}
      </Link>
    </section>
  )
}
