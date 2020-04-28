import React from 'react';
import '../../styles/output.css';

import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

function Aside(){
    return(
        <aside
                    className="
                        col-span-1
                        flex flex-col
                        
                        justify-around items-center
                        xl:justify-between
                        
                        m-3
                        h-auto
                        
                        w-full
                        min-h-550
                        max-h-550

                        
                    "
                >
                    <div
                        className="
                            flex flex-col
                            justify-center items-center
                            bg-white
                            w-full
                            h-32
                            rounded-lg
                            shadow-lg
                        "
                    >
                        <FaEnvelope color="#333333" size="2.5rem" />
                        <p
                            className="
                                text-center
                                text-sm
                            "
                        >
                            E-mail <br />
                            eng.ionecavalcante@hotmail.com
                        </p>
                    </div>

                    <div
                        className="
                            flex flex-col
                            justify-center items-center
                            bg-white
                            w-full
                            h-32
                            rounded-lg
                            shadow-lg
                        "
                    >

                        <FaPhone color="#333333" size="2.5rem" />
                        <p
                            className="
                                text-center
                                text-sm
                            "
                        >
                            Telefone <br />
                            (79) 99626-8563
                        </p>
                    </div>

                    <div 
                        className="
                            bg-white
                            w-full
                            h-32
                            rounded-lg
                            shadow-lg

                            flex flex-col
                            justify-center
                        "
                    >
                        <a
                            href="https://instagram.com/eng.ionecavalcante/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            flex flex-col
                            justify-center items-center
                            cursor-pointer
                            
                        "

                        >
                            <FaInstagram color="#333333" size="2.5rem"/>
                            <p
                                className="
                                    text-center
                                    text-sm
                                "
                            >
                                Instagram <br />
                                @eng.ionecavalcante
                            </p>

                        </a>
                    </div>
                        
                </aside>
    );
};

export default Aside;
