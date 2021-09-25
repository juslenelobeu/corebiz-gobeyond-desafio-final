import React from 'react'
import './styles.scss'
import logo from '../../assets/brand/logo-corebiz-global.svg'

export const Header = () => {
  return (
    <header className="header flex justify-between align-center">
      <img className="header__logo" src={logo} alt="Logo Corebiz" title="Logo Corebiz" width="216" />
      <nav className="header__menu-top flex">
        <a className="menu-top--link" href="/">a corebiz</a>
        <a className="menu-top--link" href="/">serviços</a>
        <a className="menu-top--link" href="/">cases</a>
        <a className="menu-top--link" href="/">contato</a>
      </nav>
    </header>
  )
}
