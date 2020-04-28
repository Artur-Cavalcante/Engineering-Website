import React, { useState } from 'react';
import '../../styles/output.css';

import MenuBar from './MenuBar';
import BackgroundMenuBar from './BackgroundMenuBar';
import NavBar from './NavBar';
import ButtonNav from './ButtonNav';

import IoneCavalcanteEngenhariaLogoWithName from '../images/header/LogoWithLogoName.svg';

function Header() {
  const [menuBar, setMenuBar] = useState(false);
  const [backgroundMenuBar, setBackgroundMenuBar] = useState(false)

  function handleClickBackgroundOrOption(){
    setMenuBar(false);
    setBackgroundMenuBar(false);
  };

  function handleClickButtonNav(){
    if(!(menuBar && backgroundMenuBar)){
      setMenuBar(<MenuBar onClick={handleClickBackgroundOrOption}/>);
      setBackgroundMenuBar(<BackgroundMenuBar onClick={handleClickBackgroundOrOption}/>);
    }else{
      setMenuBar(false);
      setBackgroundMenuBar(false);
    };
  };

  return (
    <header
      className="
        bg-bg_white
        h-full
      ">
      <div className="
        grid grid-cols-2
        p-1
        w-full
      ">

        <div
          id="logo-box"
          className="
            flex flex-row items-center
            h-full w-full
          "
        >
          <div className="w-full h-full"
          >
            <a 
              href="https://ionecavalcanteengenharia.com.br"
              className=" 
                block 
                w-full h-full 
                min-h-47 min-w-242 
              "  
            >
              <img 
                src={IoneCavalcanteEngenhariaLogoWithName} 
                alt="logoWithName" 
                className="
                  h-full
                  w-84
                  sm:w-84
                  md:w-84
                  lg:w-84
                  xl:w-84
                "
              />
            </a>
          </div>

        </div>
        <ButtonNav onClick={handleClickButtonNav}/>
        <NavBar />
        {menuBar}
        {backgroundMenuBar }

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