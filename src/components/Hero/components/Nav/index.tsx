import './styles.scss'
import { setLocale } from '../../../../paraglide/runtime.js'
import { syncHtmlLang } from '../../../../utils/syncHtmlLang'
import { useFadeIn } from '@/hooks/useGSAPAnimation'

const Nav = () => {
  const { ref: navRef } = useFadeIn<HTMLElement>('[data-fade]', { y: 0 })
  const handleLocaleChange = (locale: 'en' | 'jp') => {
    setLocale(locale)
    syncHtmlLang()
  }

  return (
    <nav className="navbar" ref={navRef}>
      <h2 className="navbar__title">Adam Pugh</h2>
      <div className="navbar__language-select">
        <button
          className="navbar__language-select__button"
          onClick={() => handleLocaleChange('en')}
        >
          EN
        </button>
        /
        <button
          className="navbar__language-select__button navbar__language-select__button--japanese"
          onClick={() => handleLocaleChange('jp')}
        >
          日本語
        </button>
      </div>
    </nav>
  )
}

export default Nav
