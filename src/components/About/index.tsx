import './styles.scss'
import { m } from '@/paraglide/messages.js'
import SkeletonDesk from '../../assets/skeleton-desktop-animation.webp'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoDownload } from 'react-icons/io5'
import { useLettersRevealMask, useFadeIn } from '@/hooks/useGSAPAnimation'
// import { useEffect } from 'react'

const About = () => {
  const { ref: aboutHeadingRef } = useLettersRevealMask<HTMLHeadingElement>()
  const { ref: paragraphRef } = useFadeIn<HTMLParagraphElement>()
  const { ref: buttonsRef } = useFadeIn<HTMLDivElement>()

  // useEffect(() => {
  //   console.log('heading ref', headingRef)
  // }, [headingRef])

  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title" ref={aboutHeadingRef}>
          {m.aboutTitle()}
        </h2>
        <div className="about__wrapper">
          <div className="about__image">
            <img src={SkeletonDesk} alt="skeleton working at a desk" />
          </div>
          <div className="about__content">
            <p className="about__content__text" ref={paragraphRef}>
              {m.aboutText()}
            </p>
            <div className="about__content__links" ref={buttonsRef}>
              <a
                data-fade
                href="https://github.com/adampugh"
                className="about__content__links__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
                <span>{m.githubLink()}</span>
              </a>
              <a
                data-fade
                href="https://www.linkedin.com/in/adam-pugh-59502b88/"
                className="about__content__links__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
                {m.linkedInLink()}
              </a>
              <a
                data-fade
                className="about__content__links__link"
                href="/adam-pugh-cv.pdf"
                download="Adam Pugh - CV.pdf"
              >
                <IoDownload size={20} />
                {m.downloadCVLink()}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
