import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/output.css';

import IoneCavalcanteEngenhariaLogo from './images/header/IoneCavalcanteEngineeringLogoWithBackground.svg';
import IoneCavalcanteEngenhariaLogoNameWithoutBackground from './images/header/IoneCavalcanteEngineeringLogoNameWithoutBackground.svg';

function Header() {
  return (
    <header
      className="
        bg-bg_white
      ">
      <div className="
        grid grid-cols-1
        md:grid md:grid-cols-2
        lg:grid lg:grid-cols-2
        xl:grid xl:grid-cols-2
        m-1
      ">

        <div
          id="logo-box"
          className="
            flex flex-row items-center
          "
        >
          <div id="logo-img-box">
            <a href="https://ionecavalcanteengenharia.com.br">
              <img
                src={IoneCavalcanteEngenhariaLogo}
                alt="Ione-Cavalcante-Engenharia-logo-img"
                className=""
              />

            </a>
          </div>
          <h1 id="logo-name-box">
            <a href="https://ionecavalcanteengenharia.com.br">
              <img
                src={IoneCavalcanteEngenhariaLogoNameWithoutBackground}
                alt="Ione-Cavalcante-Engenharia-logo-name"
              />

            </a>
          </h1>
        </div>

        <nav 
          className="
            flex flex-row items-center justify-center 
          "
        >
          <NavLink exact to="/" className="m-3 focus:border-gray-300 ">Início</NavLink>
          <NavLink to="/servicos" className="m-3 border-b-3p border-primary">Serviços</NavLink>
          <NavLink to="/contato" className="m-3">Contato</NavLink>
          <NavLink to="/sobre" className="m-3">Sobre</NavLink>
        </nav>

      </div>

      <div
        id="header-bottom-bar"
        className="
          w-full bg-primary h-1 
          sm:h-1
          md:h-1p
          lg:h-1p
          xl:h-1p
        "
      ></div>
    </header>
  );
};

export default Header;