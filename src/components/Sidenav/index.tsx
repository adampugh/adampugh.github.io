import './styles.scss'
import { m } from '@/paraglide/messages.js'
import SkullRotation from '../../assets/skull_rotation.webp'

const SideNavLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <a className="side-nav__link" href={`#${link}`}>
      <img className="side-nav__link__skull" src={SkullRotation} alt="rotating skull" />
      <span className="side-nav__link__text">{text}</span>
    </a>
  )
}

const SideNav = ({ blackBg = false }) => {
  const links = [
    { title: m.homeTitle(), link: 'home' },
    { title: m.projectsTitle(), link: 'projects' },
    { title: m.aboutTitle(), link: 'about' },
    { title: m.contactTitle(), link: 'contact' },
  ] as const

  return (
    <aside className={`side-nav ${blackBg ? 'side-nav--black' : ''}`.trim()}>
      {links.map(({ title, link }, i) => (
        <SideNavLink text={title} key={i} link={link} />
      ))}
    </aside>
  )
}

export default SideNav
