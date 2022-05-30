import React from "react"
import "../styles/components/Projects.scss"
import ProjectsItem from "./ProjectsItem"

const Projects = () => {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-container">
        <ProjectsItem
          classname="luna"
          title='Sitio Web de "Luna To Go"'
          description='Single Page Application para el servicio de delivery "Luna To Go", desarrollado con React JS.'
          repo="https://github.com/isaiorellana-dev/luna-t-g"
          site="https://lunatogohn.com/"
        />
        <ProjectsItem
          classname="todo"
          title="ToDo React App"
          description="Pagina para hacer lista de tareas y guardarlas en local storage,
              desarrollada con create-react-app."
          repo="https://github.com/isaiorellana-dev/todo-app"
          site="https://isaiorellana-dev.github.io/todo-app/"
        />
        {/* <ProjectsItem title="" description="" repo="" site="" /> */}
        <ProjectsItem
          classname="batata"
          title="Pagina Web Batatabit"
          description="Pagina Mobile First de Batatabit, hecho solo con HTML y CSS."
          repo="https://github.com/isaiorellana-dev/BataBit"
          site="https://isaiorellana-dev.github.io/BataBit/"
        />
      </div>
    </section>
  )
}

export default Projects
