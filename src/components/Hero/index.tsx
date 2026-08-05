import './styles.scss'
import { m } from '@/paraglide/messages.js'
import Nav from './components/Nav'
import SideNav from '../Sidenav'
import HeroMain from './components/HeroMain'
import Logos from './components/Logos'
import { useLettersRevealMask } from '@/hooks/useGSAPAnimation'

const Hero = () => {
  const { ref: headingRef } = useLettersRevealMask<HTMLHeadingElement>()

  return (
    <section className="hero" id="home">
      <div className="container">
        <Nav />
        <h1 ref={headingRef} className="hero__title">
          <span>{m.heroText1()}</span>
          <span>{m.heroText2()}</span>
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
