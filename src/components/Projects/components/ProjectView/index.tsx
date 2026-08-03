import './styles.scss'
import type { ProjectType } from '../../data'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const ProjectView = ({
  selectedProject,
  clearProject,
}: {
  selectedProject: ProjectType
  clearProject: () => void
}) => {
  const { name, text, tech, imageSrc, imageArray, logoSrc, link } = selectedProject

  return (
    <div className="selected-project">
      <button className="selected-project__return-button" onClick={clearProject}>
        <BsArrowLeft size={26} />
        back to projects
      </button>
      <h1 className="selected-project__title">{name}</h1>
      <div className="selected-project__flex">
        <div className="selected-project__flex__left-col">
          <div className="selected-project__flex__left-col__character-img">
            <img src={imageSrc} alt="name" />
          </div>
          <div className="selected-project__flex__left-col__logo-img">
            <img src={logoSrc} alt={`${name} logo`} />
          </div>
        </div>
        <div className="selected-project__flex__middle-col">
          <a href={link} className="selected-project__flex__middle-col__link" target="_blank">
            View Project
            <BsArrowRight size={26} />
          </a>
          <p className="selected-project__flex__middle-col__text">{text}</p>

          <p className="selected-project__flex__middle-col__tech-used">Tech used:</p>
          <div className="selected-project__flex__middle-col__tech-icons">
            {tech.map((tech) => (
              <div className="selected-project__flex__middle-col__tech-icons__icon">
                <tech.icon size={40} />
                <p className="selected-project__flex__middle-col__tech-icons__icon__name">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="selected-project__flex__end-col">
          <div className="selected-project__flex__end-col__image-1">
            <img src={imageArray[0]} alt={name} />
          </div>
          <div className="selected-project__flex__end-col__image-2">
            <img src={imageArray[1]} alt={name} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectView
