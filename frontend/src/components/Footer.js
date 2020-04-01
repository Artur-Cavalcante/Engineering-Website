import React from 'react';
import { NavLink } from 'react-router-dom';

import img_logo from './images/footer/Logo_Negativa.svg';
import name_logo from './images/footer/IoneCavalcanteEngineeringLogoNameWithoutBackgroundFim.svg';
import instagram_logo from './images/footer/Instagram_Negativa-1.svg';
import e_mail_logo from './images/footer/Email_negativa.svg';
import phone_logo from './images/footer/Telefone_Negativa-1.svg';
import github_logo from './images/footer/Github_Negativa.svg';

function Footer() {
    return (
        <footer>
            <div className="logo-box">
                <div className="img-logo-box">
                    <img src={img_logo} alt="img-logo" />
                </div>
                <div className="name-logo-box">
                    <img src={name_logo} alt="name-logo" />
                </div>
            </div>

            <div className="social-media-box">
                <div className="instagram-box">
                    <a href="https://instagram.com/eng.ionecavalcante/" target="_blank">
                        <img src={instagram_logo} alt="instagram-logo" />
                        <p>Instagram</p>
                    </a>
                </div>

                <div className="e-mail-box">
                        <NavLink to="/contato"  >
                            <img src={e_mail_logo} alt="e-mail-logo" />
                            <p>E-mail</p>
                        </NavLink>
                </div>

                <div className="phone-box">
                        <NavLink to="/contato"  >
                            <img src={phone_logo} alt="phone-logo" />
                            <p>Telefone</p>
                        </NavLink>
                </div>

                <div className="github-box">
                    <a href="http://github.com/Artur-Cavalcante/ione-cavalcante-engineering" target="_blank" >
                        <img src={github_logo} alt="github-logo" />
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