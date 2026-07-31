import './styles.scss'

const Nav = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar__title">Adam Pugh</h2>
      <div className="navbar__language-select">
        <button className="navbar__language-select__button">EN</button>/
        <button className="navbar__language-select__button navbar__language-select__button--japanese">
          日本語
        </button>
      </div>
    </nav>
  )
}

export default Nav
