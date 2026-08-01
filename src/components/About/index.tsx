import './styles.scss'
import SkeletonDesk from '../../assets/skeleton-desktop-animation.webp'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoDownload } from 'react-icons/io5'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About</h2>
        <div className="about__wrapper">
          <div className="about__image">
            <img src={SkeletonDesk} alt="skeleton working at a desk" />
          </div>
          <div className="about__content">
            <p className="about__content__text">
              Worked as the lead front end engineer building the site with Reacct and other tech
              building evertthing I was upposed to build so here it is let’s just code this as fast
              as possible and then I don’t have tho think about this at all.
            </p>
            <div className="about__content__links">
              <a
                href="https://github.com/adampugh"
                className="about__content__links__link"
                target="_blank"
              >
                <FaGithub size={20} />
                <span>Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/adam-pugh-59502b88/"
                className="about__content__links__link"
                target="_blank"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
              <a href="" className="about__content__links__link">
                <IoDownload size={20} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
