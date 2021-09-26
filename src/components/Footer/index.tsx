import React from 'react'
import './styles.scss'

import logoCorebizFooter from '../../assets/brand/logo-corebiz-global-footer.svg'
import iconFacebook from '../../assets/icons/icon-facebook.svg'
import iconInstagram from '../../assets/icons/icon-instagram.svg'
import iconLinkedin from '../../assets/icons/icon-linkedin.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__copyright">
          <img className="footer__logo" src={logoCorebizFooter} alt="Logo Corebiz" width="140" />
          <span className="footer__copyright-text">direitos reservados, corebiz 2021</span>
          <nav className="footer__nav-social">
            <a className="nav__item" href="https://pt-br.facebook.com/corebiz.ag/" target="_blank" rel="noreferrer"><img src={iconFacebook} alt="Ícone do Facebook" width={16} height={16} /></a>
            <a className="nav__item" href="https://www.instagram.com/corebizag/" target="_blank" rel="noreferrer"><img src={iconInstagram} alt="Ícone do Instagram" width={16} height={16} /></a>
            <a className="nav__item" href="https://www.linkedin.com/company/corebiz-brasil" target="_blank" rel="noreferrer"><img src={iconLinkedin} alt="Ícone do Linkedin" width={16} height={16} /></a>
          </nav>
        </div>
        <nav className="footer__nav-links">
          <a className="nav__link" href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer">a corebiz</a>
          <a className="nav__link" href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer">serviços</a>
          <a className="nav__link" href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer">cases</a>
          <a className="nav__link" href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer">contato</a>
        </nav>
      </div>
      <div className="footer__right">
        <div className="footer--col">
          <h2 className="footer__title">.Brasil</h2>
          <address>Avenida Andrômeda, 2000. <br />Bloco 6 e 8 Alphaville SP</address>
          <address>R. Ifigenia Maria de Oliveira, 3793 <br />Jr. Piratininga Franca SP</address>
        </div>
        <div className="footer--col">
          <h2 className="footer__title">.Argentina</h2>
          <address>Soler 5518, 3 Piso <br />C1425BYF <br />Palermo Hollywood <br />CABA</address>
        </div>
        <div className="footer--col">
          <h2 className="footer__title">.México</h2>
          <address>Blvd. Miguel de Cervantes Saavedra 169, <br />Granada, Miguel Hidalgo, 11520 <br />Ciudad de México, CDMX</address>
        </div>
        <div className="footer--col">
          <h2 className="footer__title">.Chile</h2>
          <address>Roberto del Río 1137, <br />Providencia.</address>
        </div>
      </div>
    </footer>
  )
}
