import React from 'react';
import '../styles/output.css';

import logo_with_name from '../images/footer/LogoNegativaWithName.svg'

function Footer() {
    return (
        <footer
            className="
                bg-second
                h-auto
            "
        >
            <div
                id="logo-media-box"
                className="
                    p-1
                    grid grid-rows-1
                    items-center justify-center
                "
            >
                <div>
                    <a href="https://ionecavalcanteengenharia.com.br">
                        <img
                            src={logo_with_name}
                            alt="logoWithName"
                            className="
                                h-full
                                w-56
                                sm:w-64
                                md:w-84
                                lg:w-84
                                xl:w-84
                            "
                        />
                    </a>
                </div>

            </div>

            <div
                id="footer-bar-both"
                className="
                    flex flex-row items-center justify-center
                    bg-black
                "
            >
                <a
                    className="
                        text-second
                        hover:text-bg_gray
                        text-xs
                        sm:text-sm md:text-sm lg:text-sm xl:text-sm
                    "
                    href="https://github.com/Artur-Cavalcante"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    &copy;2020 Artur-Cavalcante
                </a>
            </div>
        </footer>
    );
};

export default Footer;