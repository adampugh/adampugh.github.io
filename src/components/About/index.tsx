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
              An experienced front-end engineer specialising in React, I've worked with fantastic
              digital agencies helping to build large-scale projects for clients from Premier League
              football clubs to global fashion brands with millions of monthly users. I enjoy
              bringing designers' visions to life in pixel-perfect code. Currently studying Three.js
              and Japanese.
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
