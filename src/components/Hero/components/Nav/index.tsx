import './styles.scss'
import { setLocale } from '../../../../paraglide/runtime.js'
import { syncHtmlLang } from '../../../../utils/syncHtmlLang'

const Nav = () => {
  const handleLocaleChange = (locale: 'en' | 'jp') => {
    setLocale(locale)
    syncHtmlLang()
  }

  return (
    <nav className="navbar">
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
