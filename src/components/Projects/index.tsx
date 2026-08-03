import './styles.scss'
import { useState } from 'react'
import { projectsData as projects } from './data'
import ProjectView from './components/ProjectView'

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)

  const selectedProject = projects.find((project) => project.id === selectedProjectId)

  const clearProject = (): void => setSelectedProjectId(null)

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        {selectedProjectId && selectedProject ? (
          <ProjectView selectedProject={selectedProject} clearProject={clearProject} />
        ) : (
          <>
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
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
