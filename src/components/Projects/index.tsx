import './styles.scss'
import { useState } from 'react'
import ProjectBrentford from '../../assets/project-brentford.webp'
import ProjectSouthampton from '../../assets/project-southampton.webp'
import ProjectOther from '../../assets/project-other.webp'

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const projects = [
    { id: 1, name: 'Brentford FC', text: '', tech: [], imageSrc: ProjectBrentford },
    { id: 2, name: 'Southampton FC', text: '', tech: [], imageSrc: ProjectSouthampton },
    { id: 3, name: 'Other Work', text: '', tech: [], imageSrc: ProjectOther },
    { id: 4, name: 'Web3 Project', text: '', tech: [], imageSrc: ProjectBrentford },
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__list">
          {projects.map(({ id, name, imageSrc }) => (
            <div
              className="projects__list__project"
              key={id}
              onClick={() => setSelectedProjectId(id)}
            >
              <div className="projects__list__project__image">
                <img src={imageSrc} alt={name} />
              </div>
              <h4 className="projects__list__project__name">{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
