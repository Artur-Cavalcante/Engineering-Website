import React, { useState } from 'react';
import '../../styles/output.css';

function NavBar() {
  const [navServicosClass, setNavServicosClass] = useState('text-sm lg:text-base xl:text-base cursor-pointer');
  const [navContatoClass, setNavContatoClass] = useState('text-sm lg:text-base xl:text-base cursor-pointer');
  const [navSobreClass, setNavSobreClass] = useState('text-sm lg:text-base xl:text-base cursor-pointer');


  function onHover(nav) {
    switch (nav) {
      case 'servicos':
        setNavServicosClass('text-sm lg:text-base xl:text-base  border-b-3p border-primary cursor-pointer');
        break;
      case 'sobre':
        setNavSobreClass('text-sm lg:text-base xl:text-base  border-b-3p border-primary cursor-pointer');
        break;
      case 'contato':
        setNavContatoClass('text-sm lg:text-base xl:text-base  border-b-3p border-primary cursor-pointer');
        break;
      default:
        break;
    };
  };

  function offHover(nav) {
    switch (nav) {
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
    };
  };

  return (
    <nav
      className="
        flex flex-row items-center justify-around
        hidden 
        md:inline-flex 
        lg:inline-flex
        xl:inline-flex
        list-none
      "
    >
      <li
        className={navServicosClass}
        onMouseEnter={() => onHover('servicos')}
        onMouseOut={() => offHover('servicos')}

        style={{ outline: 0 }}
      >
        Serviços
      </li>

      <li
        className={navSobreClass}
        onMouseEnter={() => onHover('sobre')}
        onMouseOut={() => offHover('sobre')}

        activeStyle={{
          borderBottom: '3px solid #D49b7a',
        }}
        style={{ outline: 0 }}
      >
        Sobre
      </li>

      <li
        to="/contato"
        className={navContatoClass}
        onMouseEnter={() => onHover('contato')}
        onMouseOut={() => offHover('contato')}

        style={{ outline: 0 }}
      >
        Contato
      </li>
    </nav>
  );
};

export default NavBar;