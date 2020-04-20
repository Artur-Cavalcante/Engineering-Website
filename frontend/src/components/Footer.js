import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/output.css';


import instagram_logo from './images/footer/Instagram_Negativa-1.svg';
import e_mail_logo from './images/footer/Email_negativa.svg';
import phone_logo from './images/footer/Telefone_Negativa-1.svg';
import github_logo from './images/footer/Github_Negativa.svg';
import logo_with_name from './images/footer/LogoNegativaWithName.svg'

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
                    grid grid-cols-1
                    md:grid md:grid-cols-2
                    lg:grid lg:grid-cols-2
                    xl:grid xl:grid-cols-2
                    
                "
            >
                <div 
                    className="
                        flex flex-row  
                        h-full
                        w-3/5
                    "
                >
                    <div className="w-84">
                        <a href="https://ionecavalcanteengenharia.com.br">
                            <img src={logo_with_name} alt="logoWithName"/>
                        </a>
                    </div>
                </div>

                <div 
                    className="
                        flex flex-row items-stretch justify-around
                        h-auto
                    "
                >
                    <div 
                        id="instagram-box"
                    >
                        <a 
                            href="https://instagram.com/eng.ionecavalcante/" 
                            target="_blank"
                            className="
                                flex flex-col items-center justify-around
                            "
                        >
                            <img 
                                src={instagram_logo} 
                                alt="instagram-logo" 
                                className="
                                    h-12
                                    w-12
                                "
                            />
                            <p className='text-sm'>Instagram</p>
                        </a>
                    </div>

                    <div 
                        id="e-mail-box"
                    >
                        <NavLink 
                            to="/contato"  
                        >
                            <img 
                                src={e_mail_logo} 
                                alt="e-mail-logo" 
                                className="
                                    h-12
                                    w-12
                                "
                            />
                            <p className='text-sm text-center'>E-mail</p>
                        </NavLink>
                    </div>

                    <div className="phone-box">
                        <NavLink 
                            to="/contato"
                            className="
                                flex flex-col items-center justify-around
                            "
                        >
                            <img 
                                src={phone_logo} 
                                alt="phone-logo" 
                                className="
                                    h-12
                                    w-12
                                " 
                            />
                            <p className='text-sm'>Telefone</p>
                        </NavLink>
                    </div>

                    <div className="github-box">
                        <a 
                            href="http://github.com/Artur-Cavalcante/ione-cavalcante-engineering" 
                            target="_blank" 
                            className="
                                flex flex-col items-center justify-around
                            "
                        >
                            <img 
                                src={github_logo} 
                                alt="github-logo" 
                                className="
                                    h-12
                                    w-12
                                "
                            />
                            <p className='text-sm'>Github</p>
                        </a>
                    </div>
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
                    "
                    href="https://github.com/Artur-Cavalcante"
                >
                    &copy;2020 Artur-Cavalcante
                </a>
            </div>
        </footer>
    );
};

export default Footer;