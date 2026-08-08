import './styles.scss'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import { m } from '@/paraglide/messages.js'
import SkullRotation from '../../assets/skull_rotation.webp'
import { useFadeIn } from '@/hooks/useGSAPAnimation'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useGSAP } from '@gsap/react'

const SCROLL_DURATION = 1

const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, link: string) => {
  const target = document.getElementById(link)
  if (!target) return

  // Native anchor jump would be instant (no `scroll-behavior: smooth` —
  // that conflicts with the GSAP-driven scroll elsewhere on the page), so
  // this animates the scroll itself instead, on the same engine.
  event.preventDefault()
  gsap.to(window, {
    scrollTo: { y: target, autoKill: true },
    duration: SCROLL_DURATION,
    ease: 'power2.inOut',
  })
}

const SideNavLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <a
      className="side-nav__link"
      href={`#${link}`}
      data-fade
      onClick={(event) => handleLinkClick(event, link)}
    >
      <img className="side-nav__link__skull" src={SkullRotation} alt="rotating skull" />
      <span className="side-nav__link__text">{text}</span>
    </a>
  )
}

const SideNav = () => {
  const { ref: linksRef } = useFadeIn<HTMLBaseElement>('[data-fade]', { delay: 0.4 })
  const [blackBg, setBlackBg] = useState(false)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '#projects',
      start: 'top center',
      onEnter: () => setBlackBg(true),
      onLeaveBack: () => setBlackBg(false),
    })
  })

  const links = [
    { title: m.homeTitle(), link: 'home' },
    { title: m.projectsTitle(), link: 'projects' },
    { title: m.aboutTitle(), link: 'about' },
    { title: m.contactTitle(), link: 'contact' },
  ] as const

  return (
    <aside ref={linksRef} className={`side-nav ${blackBg ? 'side-nav--black' : ''}`.trim()}>
      {links.map(({ title, link }, i) => (
        <SideNavLink text={title} key={i} link={link} />
      ))}
    </aside>
  )
}

export default SideNav
