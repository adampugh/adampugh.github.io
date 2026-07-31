import './styles.scss'
import Nav from './components/Nav'
import SideNav from '../Sidenav'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <Nav />
        <SideNav />
      </div>
    </section>
  )
}

export default Hero
