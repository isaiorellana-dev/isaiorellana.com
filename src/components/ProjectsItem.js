import React from "react"

const ProjectsItem = ({ classname, title, description, repo, site }) => {
  return (
    <div className={`project-item ${classname}`}>
      <div className="projects-container-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={repo} target="_blank">
          Repositorio
        </a>
        <a href={site} target="_blank">
          Sitio
        </a>
      </div>
    </div>
  )
}

export default ProjectsItem
