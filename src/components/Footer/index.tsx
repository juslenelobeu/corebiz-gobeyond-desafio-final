import React from 'react'
import './styles.scss'

import logoCorebizFooter from '../../assets/brand/logo-corebiz-global-footer.svg'
import iconFacebook from '../../assets/icons/icon-facebook.svg'
import iconInstagram from '../../assets/icons/icon-instagram.svg'
import iconLinkedin from '../../assets/icons/icon-linkedin.svg'

export const Footer = () => {
  return (
    <footer className="footer flex">
      <div className="footer__left flex justify-between">
        <div className="footer--col flex col flex justify-between">
          <div className="footer__logo flex col">
            <img src={logoCorebizFooter} alt="Logo Corebiz" width="140" />
            <span className="footer__copyright">direitos reservados, corebiz 2021</span>
          </div>
          <nav className="footer__nav-social flex">
            <a className="nav__item" href="https://pt-br.facebook.com/corebiz.ag/" target="_blank" rel="noreferrer"><img src={iconFacebook} alt="Ícone do Facebook" /></a>
            <a className="nav__item" href="https://www.instagram.com/corebizag/" target="_blank" rel="noreferrer"><img src={iconInstagram} alt="Ícone do Instagram" /></a>
            <a className="nav__item" href="https://www.linkedin.com/company/corebiz-brasil" target="_blank" rel="noreferrer"><img src={iconLinkedin} alt="Ícone do Linkedin" /></a>
          </nav>
        </div>
        <div className="footer--col flex col">
          <nav className="footer__nav-links flex col">
            <a className="nav__link" href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer">a corebiz</a>
            <a className="nav__link" href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer">serviços</a>
            <a className="nav__link" href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer">cases</a>
            <a className="nav__link" href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer">contato</a>
          </nav>
        </div>
      </div>
      <div className="footer__right flex justify-between">
        <div className="footer--col flex col">
          <h5 className="footer__title">.Brasil</h5>
          <address>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</address>
          <address>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</address>
        </div>
        <div className="footer--col flex col">
          <h5 className="footer__title">.Argentina</h5>
          <address>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</address>
        </div>
        <div className="footer--col flex col">
          <h5 className="footer__title">.México</h5>
          <address>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</address>
        </div>
        <div className="footer--col flex col">
          <h5 className="footer__title">.Chile</h5>
          <address>Roberto del Río 1137, Providencia.</address>
        </div>
      </div>
    </footer>
  )
}
