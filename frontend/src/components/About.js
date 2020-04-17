import React from 'react';
import '../styles/output.css';

import img_missao from './images/about/img_missao1.svg';

function About(){
    return (
        <section 
            id="about-box"
            className="
                flex flex-col items-center justify-center 
                bg-bg_gray
                pt-3
                pb-20
                h-auto
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
                        src={img_missao} 
                        alt="img_missao"
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
                    max-w-4xl
                    addmax-w-2xl
                    max-h-full
                    p-10
                    shadow-2xl
                    font-bold
                    text-lg
                    text-black
                    text-center               
                "
            >
                Nossa missão é atender o mercado com nossos serviços buscando sempre satisfazer melhor o cliente, visando a qualidade e aplicando nossa experiência em toda área de Engenharia Civil com profissionais qualificados.
            </div>
        </section>
    );
};

export default About;