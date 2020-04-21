import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/output.css';

function NavBar(){
  const [navInicioClass, setNavInicioClass] = useState('text-sm lg:text-base xl:text-base ' );
  const [navServicosClass, setNavServicosClass] = useState('text-sm lg:text-base xl:text-base ');
  const [navContatoClass, setNavContatoClass] = useState('text-sm lg:text-base xl:text-base ');
  const [navSobreClass, setNavSobreClass] = useState('text-sm lg:text-base xl:text-base ');


  function onHover(nav) {
    switch (nav) {
      case 'inicio':
        setNavInicioClass('text-sm lg:text-base xl:text-base  border-b-3p border-primary');
        break;
      case 'servicos':
        setNavServicosClass('text-sm lg:text-base xl:text-base  border-b-3p border-primary');
        break;
      case 'contato':
        setNavContatoClass('text-sm lg:text-base xl:text-base  border-b-3p border-primary');
        break;
      case 'sobre':
        setNavSobreClass('text-sm lg:text-base xl:text-base  border-b-3p border-primary');
        break;
      default:
        break;
    }
  }

  function offHover(nav) {
    switch (nav) {
      case 'inicio':
        setNavInicioClass('text-sm lg:text-base xl:text-base  ');
        break;
      case 'servicos':
        setNavServicosClass('text-sm lg:text-base xl:text-base  ');
        break;
      case 'contato':
        setNavContatoClass('text-sm lg:text-base xl:text-base  ');
        break;
      case 'sobre':
        setNavSobreClass('text-sm lg:text-base xl:text-base  ');
        break;
      default:
        break;
    }
  }

	return (
		<nav
          className="
            flex flex-row items-center justify-around
            hidden 
            md:inline-flex 
            lg:inline-flex
            xl:inline-flex
          "
        >
          <NavLink 
            exact to="/" 
            className={navInicioClass} 

            onMouseEnter={() => onHover('inicio')} 
            onMouseOut={() => offHover('inicio')}
          
            activeStyle={{
              //NavLink's Atribute 
              borderBottom: '3px solid #D49b7a',
            }}

            style={{outline: 0}}
          > 
            Início
          </NavLink>
          <NavLink 
            to="/servicos"
            className={navServicosClass} 

            onMouseEnter={() => onHover('servicos')} 
            onMouseOut={() => offHover('servicos')}
          
            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}

            style={{outline: 0}}
          >
            Serviços
          </NavLink>
          <NavLink 
            to="/contato" 
            className={navContatoClass} 

            onMouseEnter={() => onHover('contato')} 
            onMouseOut={() => offHover('contato')}
          

            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}

            style={{outline: 0}}
          >
            Contato
          </NavLink>
          <NavLink 
            to="/sobre" 
            className={navSobreClass} 

            onMouseEnter={() => onHover('sobre')} 
            onMouseOut={() => offHover('sobre')}
          
            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}

            style={{outline: 0}}
          >
            Sobre
          </NavLink>
        </nav>
	);
}

export default NavBar;