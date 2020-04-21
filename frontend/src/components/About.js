import React from 'react';
import '../styles/output.css';

import img_mission from './images/about/img_missao1.svg';
import img_crew from './images/about/Equipe.svg'

function About(){
    return (
        <section 
            id="about-box"
            className="
                flex flex-col items-center justify-center 
                bg-bg_gray
                pt-8
                pb-24
                h-full
            "
        >
            <div 
                className="
                    flex flex-col items-center justify-center
                    w-24
                    pb-12
                "
            >
                <div >
                    <img 
                        src={img_mission} 
                        alt="img_mission"
                        className="
                            p-2
                            h-auto

                        "
                    />
                </div>
                <h1 
                    className="
                        text-second
                        text-lg
                        font-bold
                        "
                    >
                    Missão
                </h1>
            </div>

            <div 
                className="
                    bg-second
                    shadow-2xl
                    max-w-4xl
                    font-bold
                    text-black
                    text-center
                    p-6
                    md:p-8
                    lg:p-10
                    xl:p-10

                    text-base
                    md:text-base
                    lg:text-lg
                    xl:text-lg
                "
            >
                Nossa missão é atender o mercado com nossos serviços buscando sempre satisfazer melhor o cliente, visando a qualidade e aplicando nossa experiência em toda área de Engenharia Civil com profissionais qualificados.
            </div>
        </section>
    );
};

export default About;