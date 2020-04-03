import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/output.css';

import IoneCavalcanteEngenhariaLogo from './images/header/IoneCavalcanteEngineeringLogoWithBackground.svg';
import IoneCavalcanteEngenhariaLogoNameWithoutBackground from './images/header/IoneCavalcanteEngineeringLogoNameWithoutBackground.svg';

function Header() {
  const [navInicioClass, setNavInicioClass] = useState('')
  const [navServicosClass, setNavServicosClass] = useState('')
  const [navContatoClass, setNavContatoClass] = useState('')
  const [navSobreClass, setNavSobreClass] = useState('')


  function onHover(nav) {
    switch (nav) {
      case 'inicio':
        setNavInicioClass(' border-b-3p border-primary');
        break;
      case 'servicos':
        setNavServicosClass(' border-b-3p border-primary');
        break;

      case 'contato':
        setNavContatoClass(' border-b-3p border-primary');
        break;

      case 'sobre':
        setNavSobreClass(' border-b-3p border-primary');
        break;
      default:
        break;
    }
  }

  function offHover(nav) {
    switch (nav) {
      case 'inicio':
        setNavInicioClass('');
        break;
      case 'servicos':
        setNavServicosClass('');
        break;

      case 'contato':
        setNavContatoClass('');
        break;

      case 'sobre':
        setNavSobreClass('');
        break;
      default:
        break;
    }
  }
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
            h-full
            w-3/5
          "
        >
          <div id="logo-img-box">
            <a href="https://ionecavalcanteengenharia.com.br">
              <img
                className="
                  
                "
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
            flex flex-row items-center justify-around
          "
        >
          <NavLink 
            exact to="/" 
            className={navInicioClass} 

            onMouseEnter={() => onHover('inicio')} 
            onMouseOut={() => offHover('inicio')}
          
            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}
          > Início</NavLink>
          <NavLink 
            to="/servicos"
            className={navServicosClass} 

            onMouseEnter={() => onHover('servicos')} 
            onMouseOut={() => offHover('servicos')}
          
            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}
          >Serviços</NavLink>
          <NavLink 
            to="/contato" 
            className={navContatoClass} 

            onMouseEnter={() => onHover('contato')} 
            onMouseOut={() => offHover('contato')}
          

            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}
          >Contato</NavLink>
          <NavLink 
            to="/sobre" 
            className={navSobreClass} 

            onMouseEnter={() => onHover('sobre')} 
            onMouseOut={() => offHover('sobre')}
          
            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}
          >Sobre</NavLink>
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