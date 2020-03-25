import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    return (
        <header>
          <div className="logo-box">
            <div className="logo-img-box">
              <img src="" alt="Ione-Cavalcante-Engenharia-logo-img" />
            </div>
            <h1 className="logo-name-box">
              <img src="" alt="Ione-Cavalcante-Engenharia-logo-name" />
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