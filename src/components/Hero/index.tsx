import './styles.scss'
import Nav from './components/Nav'
import SideNav from '../Sidenav'
import HeroMain from './components/HeroMain'
import Logos from './components/Logos'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <Nav />
        <h1 className="hero__title">
          <span>Frontend</span>
          <span>Engineer</span>
        </h1>
        <HeroMain />
        <div className="hero__sidenav__container">
          <SideNav />
        </div>
      </div>
      <Logos />
    </section>
  )
}

export default Hero
