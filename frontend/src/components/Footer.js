import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="logo-box">
                <div className="img-logo-box">
                    <img src="" alt="img-logo" />
                </div>
                <div className="name-logo-box">
                    <img src="" alt="name-logo" />
                </div>
            </div>

            <div className="social-media-box">
                <div className="instagram-box">
                    <a href="https://instagram.com/eng.ionecavalcante/" target="_blank">
                        <img src="" alt="instagram-logo" />
                        <p>Instagram</p>
                    </a>
                </div>

                <div className="e-mail-box">
                        <NavLink to="/contato"  >
                            <img src="" alt="e-mail-logo" />
                            <p>E-mail</p>
                        </NavLink>
                </div>

                <div className="phone-box">
                        <NavLink to="/contato"  >
                            <img src="" alt="phone-logo" />
                            <p>Telefone</p>
                        </NavLink>
                </div>

                <div className="github-box">
                    <a href="http://github.com/Artur-Cavalcante/ione-cavalcante-engineering" target="_blank" >
                        <img src="" alt="github-logo" />
                        <p>Github</p>
                    </a>
                </div>

            </div>

            <div className="header-bar-both">
                <a href="https://github.com/Artur-Cavalcante">&copy;2020 Artur-Cavalcante</a>
            </div>
        </footer>
    );
};

export default Footer;