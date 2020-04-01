import React from 'react';

import img_missao from './images/about/img_missao.svg';

function About(){
    return (
        <section className="about-box">
            <div className="">
                <div className="">
                    <img src={img_missao} alt="img_missao"/>
                </div>
                <h1>
                    Missão
                </h1>
            </div>

            <div>
                Nossa missão é atender o mercado com nossos serviços buscando sempre satisfazer melhor o cliente, visando a qualidade e aplicando nossa experiência em toda área de Engenharia Civil com profissionais qualificados.
            </div>
        </section>
    );
};

export default About;