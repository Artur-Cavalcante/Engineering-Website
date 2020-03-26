import React from 'react';
import { NavLink } from 'react-router-dom';

import IoneCavalcanteEngenhariaLogo from './images/header/IoneCavalcanteEngineeringLogoWithBackground.svg';
import IoneCavalcanteEngenhariaLogoNameWithoutBackground from './images/header/IoneCavalcanteEngineeringLogoNameWithoutBackground.svg';

function Header() {
  return (
    <header>
      <div className="logo-box">
        <div className="logo-img-box">
          <img
            src={IoneCavalcanteEngenhariaLogo}
            alt="Ione-Cavalcante-Engenharia-logo-img"
            className=""
          />
        </div>
        <h1 className="logo-name-box">
          <img
            src={IoneCavalcanteEngenhariaLogoNameWithoutBackground}
            alt="Ione-Cavalcante-Engenharia-logo-name"
          />
        </h1>
      </div>

      <nav>
        <NavLink exact to="/">Início</NavLink>
        <NavLink to="/servicos">Serviços</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>

      <div className="header-bottom-bar"></div>
    </header>
  );
};

export default Header;