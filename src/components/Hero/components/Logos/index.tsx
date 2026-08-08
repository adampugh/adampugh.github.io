import './styles.scss'
import { m } from '@/paraglide/messages.js'
import { useFadeIn } from '@/hooks/useGSAPAnimation'
import LogoChelsea from '../../../../assets/logos/logo-chelsea.png'
import LogoElCorte from '../../../../assets/logos/logo-el-corte-ingles.png'
import LogoEmirates from '../../../../assets/logos/logo-emirates.png'
import LogoEstee from '../../../../assets/logos/logo-estee-lauder.png'
import LogoLv from '../../../../assets/logos/logo-lv.png'
import LogoPSG from '../../../../assets/logos/logo-psg.png'
import LogoTeamGB from '../../../../assets/logos/logo-team-gb.png'

const Logos = () => {
  const { ref: logoTitleRef } = useFadeIn<HTMLParagraphElement>('[data-fade]', { y: 0 })
  const logos = [LogoElCorte, LogoPSG, LogoEmirates, LogoLv, LogoEstee, LogoChelsea, LogoTeamGB]

  return (
    <div className="logos">
      <p className="logos__title" ref={logoTitleRef}>
        {m.logoText()}
      </p>
      <div className="logos__marquee">
        <div className="logos__track">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} alt="logo image" className="logos__image" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logos
