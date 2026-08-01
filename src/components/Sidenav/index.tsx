import './styles.scss'
import SkullRotation from '../../assets/skull_rotation.webp'

const SideNavLink = ({ text }: { text: string }) => {
  return (
    <a className="side-nav__link" href={`#${text}`.toLowerCase()}>
      <img className="side-nav__link__skull" src={SkullRotation} alt="rotating skull" />
      <span className="side-nav__link__text">{text}</span>
    </a>
  )
}

const SideNav = ({ blackBg = false }) => {
  const links = ['Home', 'Projects', 'About', 'Contact'] as const

  return (
    <aside className={`side-nav ${blackBg ? 'side-nav--black' : ''}`.trim()}>
      {links.map((link, i) => (
        <SideNavLink text={link} key={i} />
      ))}
    </aside>
  )
}

export default SideNav
