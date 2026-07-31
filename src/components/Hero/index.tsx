import './styles.scss'
import Nav from './components/Nav'
import SideNav from '../Sidenav'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <Nav />
        <h1 className="hero__title">
          <span>Frontend</span>
          <span>Engineer</span>
        </h1>
        <SideNav />
      </div>
    </section>
  )
}

export default Hero
