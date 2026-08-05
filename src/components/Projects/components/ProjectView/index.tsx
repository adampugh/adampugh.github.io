import './styles.scss'
import { m } from '@/paraglide/messages.js'
import type { ProjectType } from '../../data'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { useLettersRevealMask, useFadeIn } from '@/hooks/useGSAPAnimation'

const ProjectView = ({
  selectedProject,
  clearProject,
}: {
  selectedProject: ProjectType
  clearProject: (exitFunctions: (() => Promise<void>)[]) => Promise<void>
}) => {
  const { ref: headingRef, playExit: playHeadingExit } = useLettersRevealMask<HTMLHeadingElement>()
  const { ref: buttonRef, playExit: playButtonExit } = useFadeIn<HTMLButtonElement>('[data-fade]', {
    y: 0,
  })
  const { ref: linkRef, playExit: playLinkExit } = useFadeIn<HTMLAnchorElement>('[data-fade]', {
    y: 0,
  })

  const { ref: logoRef, playExit: playLogoExit } = useFadeIn<HTMLDivElement>('[data-fade]', {
    y: 0,
    delay: 0.2,
  })
  const { ref: characterRef, playExit: playCharacterExit } = useFadeIn<HTMLDivElement>()

  const { ref: paragraphRef, playExit: playParagraphExit } = useFadeIn<HTMLParagraphElement>()
  const { ref: techTitleRef, playExit: playTechTitleExit } = useFadeIn<HTMLParagraphElement>(
    '[data-fade]',
    { y: 0 },
  )

  const { ref: techRef, playExit: playTechRefExit } = useFadeIn<HTMLParagraphElement>()
  const { ref: imagesRef, playExit: playImagesExit } = useFadeIn<HTMLDivElement>()
  const { name, text, tech, imageSrc, imageArray, logoSrc, link } = selectedProject
  const exitFunctions = [
    playHeadingExit,
    playButtonExit,
    playLinkExit,
    playParagraphExit,
    playTechTitleExit,
    playTechRefExit,
    playImagesExit,
    playLogoExit,
    playCharacterExit,
  ]

  return (
    <div className="selected-project">
      <button
        ref={buttonRef}
        className="selected-project__return-button"
        onClick={() => clearProject(exitFunctions)}
      >
        <BsArrowLeft size={26} />
        {m.projectsBack()}
      </button>
      <h2 className="selected-project__title" ref={headingRef}>
        {name}
      </h2>
      <div className="selected-project__flex">
        <div className="selected-project__flex__left-col">
          <div ref={characterRef} className="selected-project__flex__left-col__character-img">
            <img src={imageSrc} alt="name" />
          </div>
          <div ref={logoRef} className="selected-project__flex__left-col__logo-img">
            <img src={logoSrc} alt={`${name} logo`} />
          </div>
        </div>
        <div className="selected-project__flex__middle-col">
          <a
            ref={linkRef}
            href={link}
            className="selected-project__flex__middle-col__link"
            target="_blank"
          >
            {m.viewProjectsLink()}
            <BsArrowRight size={26} />
          </a>
          <p ref={paragraphRef} className="selected-project__flex__middle-col__text">
            {text}
          </p>

          <p ref={techTitleRef} className="selected-project__flex__middle-col__tech-used">
            {m.techUsed()}
          </p>
          <div ref={techRef} className="selected-project__flex__middle-col__tech-icons">
            {tech.map((tech) => (
              <div data-fade className="selected-project__flex__middle-col__tech-icons__icon">
                <tech.icon size={40} />
                <p className="selected-project__flex__middle-col__tech-icons__icon__name">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div ref={imagesRef} className="selected-project__flex__end-col">
          <div data-fade className="selected-project__flex__end-col__image-1">
            <img src={imageArray[0]} alt={name} />
          </div>
          <div data-fade className="selected-project__flex__end-col__image-2">
            <img src={imageArray[1]} alt={name} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectView
