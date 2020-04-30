import React from 'react';
import '../styles/output.css';

import home_img from '../images/home/home.svg';

function Home() {
    let heightPx = 0;
    let toDownInterval = "";

    function downing(){
        if(heightPx <= 720){
            heightPx += 7;
            window.scrollTo("0", heightPx);
        }else{
            stopping();
        };
    };

    function stopping(){
        clearInterval(toDownInterval);
    };

    function handleToDown(){
        heightPx = 0;
        toDownInterval = setInterval(downing, 5);
    };

    return (
        <section id="home-box">
            <div
                id="home-box-1"
                style={{ backgroundImage: `url(${home_img})` }}
                className="
                    w-full
                    h-140
                    sm:h-120
                    md:h-120
                    lg:h-120
                    xl:h-140

                    bg-center bg-cover
                "
            >
                <div className=" 
                    text-center
                    flex flex-col
                    justify-center items-center
                    h-full w-full
                ">
                    <div
                        className="
                            text-bold text-base text-white font-black tracking-widest
                            text-3xl sm:text-4xl md:text-5xl lg:5xl xl:text-6xl
                            h-auto w-full
                            m-1 
                        "
                    >
                        Somos Seu Aliado Na Construção

                    </div>

                    <div className="text-sm text-white w-40 font-thin tracking-wide">
                        Deixe todo o esforço da obra conosco
                    </div>

                    <button
                        className="
                            m-6
                            p-3
                            text-white text-xs
                            rounded-full
                            border-2 border-white
                            transition duration-300 hover:bg-primary
                            cursor-pointer
                            outline-none
                            hover:outline-none
                            focus:outline-none
                        "
                        onClick={handleToDown}
                    >
                        Saiba Mais
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Home;