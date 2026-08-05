import './styles.scss'
import { m } from '@/paraglide/messages.js'
import { useState } from 'react'
import { projectsData as projects } from './data'
import ProjectView from './components/ProjectView'
import { useLettersRevealMask, useFadeIn } from '@/hooks/useGSAPAnimation'

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const { ref: headingRef, playExit: playTitleExit } = useLettersRevealMask<HTMLHeadingElement>({
    trigger: 'scroll',
    deps: [selectedProjectId],
  })
  const { ref: charactersRef, playExit: playPanelExit } = useFadeIn<HTMLDivElement>('[data-fade]', {
    trigger: 'scroll',
    deps: [selectedProjectId],
  })

  const selectedProject = projects.find((project) => project.id === selectedProjectId)

  const clearProject = async (exitFunctions: Array<() => Promise<void>>): Promise<void> => {
    await Promise.all(exitFunctions.map((fn) => fn()))
    setSelectedProjectId(null)
  }

  const handleSelectProject = async (id: number) => {
    await Promise.all([playPanelExit(), playTitleExit()])
    setSelectedProjectId(id)
  }

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        {selectedProjectId && selectedProject ? (
          <ProjectView selectedProject={selectedProject} clearProject={clearProject} />
        ) : (
          <>
            <h2 className="projects__title" ref={headingRef}>
              {m.projectsTitle()}
            </h2>
            <div className="projects__list" ref={charactersRef}>
              {projects.map(({ id, name, imageSrc }) => (
                <div
                  className="projects__list__project"
                  key={id}
                  onClick={() => handleSelectProject(id)}
                >
                  <div className="projects__list__project__image" data-fade>
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
