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
      <img className="header__logo" src={logo} alt="Logo Corebiz" width={216} height={48} />
      <nav className="header__menu-top">
        <span className="menu__toggle" onClick={handleToggle}>
          <hr />
          <hr />
          <hr />
        </span>
        <div className={`header__menu-content ${toggle}`}>
          <span className="menu__toggle menu__toggle-close" onClick={handleToggleClose}>
            <hr />
            <hr />
          </span>
          <a className="menu-top--link" href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer" title="A Corebiz">a corebiz</a>
          <a className="menu-top--link" href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer" title="Serviços">serviços</a>
          <a className="menu-top--link" href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer" title="Cases">cases</a>
          <a className="menu-top--link" href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer" title="Contato">contato</a>
        </div>
      </nav>
    </header>
  )
}
