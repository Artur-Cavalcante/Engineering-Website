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

                    flex flex-wrap-reverse items-center justify-center
                    md:grid md:grid-cols-2
                    lg:grid lg:grid-cols-2
                    xl:grid xl:grid-cols-2
                    
                "
            >
                <div 
                    className="
                        flex flex-row  
                        justify-center
                        sm:justify-center
                        md:justify-between
                        lg:justify-between
                        
                        h-full
                        w-full
                        
                    "
                >
                    <div className="
                                        
                        "
                        
                        >
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
                    className="
                        h-auto w-full
                        p-2
                        flex flex-row items-stretch justify-around
                        md:justify-between
                        lg:justify-between
                        xl:justify-between
                    "
                >
                    <div 
                        id="instagram-box"
                    >
                        <a 
                            href="https://instagram.com/eng.ionecavalcante/" 
                            target="_blank"
                            className="
                                flex flex-col items-center justify-center
                            "
                        >
                            <img 
                                src={instagram_logo} 
                                alt="instagram-logo" 
                                className="
                                    h-8
                                    w-8
                                    sm:w-10
                                    sm:h-10
                                    lg:w-12
                                    lg:h-12
                                    xl:h-12
                                    xl:w-12

                                    
                                "
                            />
                            <p className='text-sm text-black text-center'>Instagram</p>
                        </a>
                    </div>

                    <div 
                        id="e-mail-box"
                    >
                        <NavLink 
                            to="/contato"
                            className="
                                flex flex-col justify-center items-center
                            "  
                        >
                            <img 
                                src={e_mail_logo} 
                                alt="e-mail-logo" 
                                className="
                                    h-8
                                    w-8
                                    sm:w-10
                                    sm:h-10
                                    lg:w-12
                                    lg:h-12
                                    xl:h-12
                                    xl:w-12

                                "
                            />
                            <p className='text-sm text-black text-center'>E-mail</p>
                        </NavLink>
                    </div>

                    <div className="phone-box">
                        <NavLink 
                            to="/contato"
                            className="
                                flex flex-col  justify-center items-center
                            "
                        >
                            <img 
                                src={phone_logo} 
                                alt="phone-logo" 
                                className="
                                    h-8
                                    w-8
                                    sm:w-10
                                    sm:h-10
                                    lg:w-12
                                    lg:h-12
                                    xl:h-12
                                    xl:w-12

                                " 
                            />
                            <p className='text-sm text-black text-center'>Telefone</p>
                        </NavLink>
                    </div>

                    <div className="github-box">
                        <a 
                            href="http://github.com/Artur-Cavalcante/ione-cavalcante-engineering" 
                            target="_blank" 
                            className="
                                flex flex-col justify-center items-center
                            "
                        >
                            <img 
                                src={github_logo} 
                                alt="github-logo" 
                                className="
                                    h-8
                                    w-8
                                    sm:w-10
                                    sm:h-10
                                    lg:w-12
                                    lg:h-12
                                    xl:h-12
                                    xl:w-12

                                "
                            />
                            <p className='text-sm text-black text-center'>Github</p>
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
                        text-sm
                    "
                    href="https://github.com/Artur-Cavalcante"
                    target="_blank"
                >
                    &copy;2020 Artur-Cavalcante
                </a>
            </div>
        </footer>
    );
};

export default Footer;