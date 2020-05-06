import React from 'react';
import '../styles/output.css';

import { FaCheck, FaBriefcase, FaFileSignature, FaChartPie } from 'react-icons/fa';

function About() {
    return (
        <section id="about-box" className="bg-bg_gray">
            <div
                className="
                    bg-bg_gray
                    w-full
                    h-full
                    p-8
                "
            >
                <div className="
                   
                    p-6
                    w-full
                    h-full
                    
                    

                "
                >

                    <div 
                        className="
                            flex flex-col
                            h-full w-full
                            justify-start 
                        "
                    >
                        <div
                            className="
                                pb-4
                                font-thin tracking-wide
                                text-black font-bold
                                text-lg
                                sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                             "
                        >
                            Somos uma Equipe Preparada.
                        </div>
                        <div
                            className="
                                text-black font-thin tracking-wide
                                text-sm
                                sm:text-sm md:text-sm lg:text-base xl:text-base

                            "
                        >
                            Quisque dolor fringilla semper, libero hendrerit allis, magna augue putate nibh ucibus enim eros acumin far from the countries. 
                        </div>
                    </div>
                </div>

                <div 
                    className="
                        
                        row-span-1
                        col-span-2
                        w-full
                        h-full
                        grid grid-cols-1
                        sm:grid   sm:grid-cols-1 
                        md:grid   md:grid-cols-2
                        lg:grid   lg:grid-cols-2
                        xl:grid   xl:grid-cols-2

                        
                    "
                >
                    <div className="p-6">
                        <FaCheck style={{ marginBottom: 10 }} color="#333333" size="3rem" />
                        <div 
                            className="
                                pb-4
                                font-thin tracking-wide
                                text-black font-bold
                                text-lg
                                sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                            "
                        >
                            Easy Managment
                        </div>
                        <div 
                            className="
                                text-black font-thin tracking-wide
                                text-sm
                                sm:text-sm md:text-sm lg:text-base xl:text-base
                            "
                        >
                            Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.
                        </div>
                    </div>

                    <div className="p-6">
                        <FaBriefcase style={{ marginBottom: 10 }} color="#333333" size="3rem" />
                        <div 
                            className="
                                pb-4
                                font-thin tracking-wide
                                text-black font-bold
                                text-lg
                                sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                            "
                        >
                            Grow your Business
                    </div>
                        <div 
                            className="
                                text-black font-thin tracking-wide
                                text-sm
                                sm:text-sm md:text-sm lg:text-base xl:text-base
                            "
                        >
                            Question Marks and devious Semikoli, she continued consectetur uvite she continued adipiscing consectetur uvite continued elit ultricies acumin.
                    </div>
                    </div>

                    <div className="p-6">
                        <FaFileSignature style={{ marginBottom: 10 }} color="#333333" size="3rem" />
                        <div 
                            className="
                                pb-4
                                font-thin tracking-wide
                                text-black font-bold
                                text-lg
                                sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                            "
                        >
                            Highly Customizable
                        </div>
                        <div 
                            className="
                                text-black font-thin tracking-wide
                                text-sm
                                sm:text-sm md:text-sm lg:text-base xl:text-base
                            "
                        >
                            Pityful a rethoric question ran over her cheek, consectetur uvite adipiscing elit ultricies acumin, then they are still using her.
                        </div>
                    </div>

                    <div className="p-6">
                        <FaChartPie style={{ marginBottom: 10 }} color="#333333" size="3rem" />
                        <div 
                            className="
                                pb-4
                                font-thin tracking-wide
                                text-black font-bold
                                text-lg
                                sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                            "
                        >
                            Premium Support
                        </div>
                        <div 
                            className="
                                text-black font-thin tracking-wide
                                text-sm
                                sm:text-sm md:text-sm lg:text-base xl:text-base
                            "
                        >
                            Far from the countries Vokalia and Consonantia, there live the blind texts. Separated, consectetur uvite adipiscing elit ultricies acumin.
                        </div>
                    </div>
                </div>

            </div>

            <div
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
                        bg-second
                        shadow-2xl

                        
                        max-w-4xl
                        
                        font-bold tracking-wide 
                        text-black text-center

                        p-6
                        md:p-8
                        lg:p-10
                        xl:p-10

                        text-sm
                        sm:text-sm
                        md:text-base
                        lg:text-lg
                        xl:text-lg
                    "
                >
                    Nossa missão é atender o mercado com nossos serviços buscando sempre satisfazer melhor o cliente, visando a qualidade e aplicando nossa experiência em toda área de Engenharia Civil com profissionais qualificados.
                </div>
            </div>
        </section>
    );
};

export default About;