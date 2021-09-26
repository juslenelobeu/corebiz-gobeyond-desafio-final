import React, { useState } from 'react'
import './styles.scss'
import logo from '../../assets/brand/logo-corebiz-global.svg'

export const Header = () => {
  const [toggle, setToggle] = useState('')
  const handleToggle = () => {
    setToggle('visible')
  }
  const handleToggleClose = () => {
    setToggle('')
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Corebiz" width={216} height={50} />
      <nav className="header__menu-top">
        <button className="header__button-toggle" onClick={handleToggle} area-label="Toggle" >
          <span className="hidden" aria-hidden="true">read only</span>
          <span className="bar">
            <hr />
            <hr />
            <hr />
          </span>
        </button>

        <div className={`header__menu-content ${toggle}`}>
          <button className="header__button-toggle--close" name="toggle-close" type="button" aria-pressed="false" onClick={handleToggleClose} area-label="Toggle Close">
            <span className="hidden" aria-hidden="true">read only</span>
            <span className="bar">
              <hr />
              <hr />
            </span>
          </button>
          <a className="menu-top--link" href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer" title="A Corebiz">a corebiz</a>
          <a className="menu-top--link" href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer" title="Serviços">serviços</a>
          <a className="menu-top--link" href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer" title="Cases">cases</a>
          <a className="menu-top--link" href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer" title="Contato">contato</a>
        </div>
      </nav>
    </header>
  )
}
