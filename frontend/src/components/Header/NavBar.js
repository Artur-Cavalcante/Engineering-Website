import React, { useState } from 'react';
import '../../styles/output.css';

function NavBar() {
  const [navServicosClass, setNavServicosClass] = useState('text-sm sm:text-sm md:text-sm lg:text-base xl:text-base cursor-pointer');
  const [navContatoClass, setNavContatoClass] = useState('text-sm sm:text-sm md:text-sm lg:text-base xl:text-base cursor-pointer');
  const [navSobreClass, setNavSobreClass] = useState('text-sm sm:text-sm md:text-sm lg:text-base xl:text-base cursor-pointer');


  function onHover(nav) {
    switch (nav) {
      case 'servicos':
        setNavServicosClass('text-sm sm:text-sm md:text-sm lg:text-base xl:text-base  border-b-3p border-primary cursor-pointer transition duration-300 ');
        break;
      case 'sobre':
        setNavSobreClass('text-sm sm:text-sm md:text-sm lg:text-base xl:text-base  border-b-3p border-primary cursor-pointer transition duration-300 ');
        break;
      case 'contato':
        setNavContatoClass('text-sm sm:text-sm md:text-sm lg:text-base xl:text-base  border-b-3p border-primary cursor-pointer transition duration-300 ');
        break;
      default:
        break;
    };
  };

  function offHover(nav) {
    switch (nav) {
      case 'servicos':
        setNavServicosClass('text-sm sm:text-sm md:text-sm lg:text-base xl:text-base ');
        break;
      case 'contato':
        setNavContatoClass('text-sm sm:text-sm md:text-sm lg:text-base xl:text-base  ');
        break;
      case 'sobre':
        setNavSobreClass('text-sm sm:text-sm md:text-sm lg:text-base xl:text-base  ');
        break;
      default:
        break;
    };
  };

  return (
    <nav
      className="
        list-none
        flex flex-row items-center justify-around
        hidden 
        sm:hidden
        md:inline-flex 
        lg:inline-flex
        xl:inline-flex
      "
    >
      <a
        href="#services-box-1"
        className="outline-none"
      >
        <li
          className={navServicosClass}
          onMouseEnter={() => onHover('servicos')}
          onMouseOut={() => offHover('servicos')}
        >
          Serviços

        </li>
      </a>

      <a
        href="#about-box"
        className="outline-none"
      >
        <li
          className={navSobreClass}
          onMouseEnter={() => onHover('sobre')}
          onMouseOut={() => offHover('sobre')}
        >
          Sobre
        </li>
      </a>

      <a
        href="#contact-box"
        className="outline-none"
      >
        <li
          className={navContatoClass}
          onMouseEnter={() => onHover('contato')}
          onMouseOut={() => offHover('contato')}
        >
          Contato
        </li>
      </a>
    </nav>
  );
};

export default NavBar;