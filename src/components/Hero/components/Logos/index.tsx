import './styles.scss'
import LogoChelsea from '../../../../assets/logos/logo-chelsea.png'
import LogoElCorte from '../../../../assets/logos/logo-el-corte-ingles.png'
import LogoEmirates from '../../../../assets/logos/logo-emirates.png'
import LogoEstee from '../../../../assets/logos/logo-estee-lauder.png'
import LogoLv from '../../../../assets/logos/logo-lv.png'
import LogoPSG from '../../../../assets/logos/logo-psg.png'
import LogoTeamGB from '../../../../assets/logos/logo-team-gb.png'

const Logos = () => {
  const logos = [LogoElCorte, LogoPSG, LogoEmirates, LogoLv, LogoEstee, LogoChelsea, LogoTeamGB]

  return (
    <div className="logos">
      <p className="logos__title">Find my code on:</p>

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
