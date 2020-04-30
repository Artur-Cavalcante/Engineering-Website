import React from 'react';
import '../../styles/output.css';

import house1 from '../../images/services/Casa1.svg';
import house2 from '../../images/services/Casa2.svg';
import house3 from '../../images/services/Casa3.svg';

function ServicesBox1(){
    return (
        <div
            id="services-box-1"
            className="
                bg-bg_gray
                pb-12
            "
            >
                <div
                    className="
                        flex flex-wrap
                        justify-around
                        w-full 
                    "
                >
                    <div className="border-2 w-84 h-auto shadow-2xl m-6 bg-white">
                        <img  src={house1} alt="house-1" />
                        <div className="p-4">
                            <div 
                                className="
                                    p-2
                                    text-center font-bold 
                                    text-base
                                    sm:text-base md:text-base lg:text-base xl:text-lg
                                "
                            >
                                Titulo
                            </div>
                            <div 
                                className=" 
                                    font-thin tracking-wide
                                    text-sm 
                                    sm:text-sm md:text-sm lg:text-sm xl:text-base
                                "
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium cum cupiditate officiis autem accusantium, assumenda delectus magnam
                            </div>
                        </div>
                    </div>
                    <div className="border-2 w-84 h-auto shadow-2xl m-6 bg-white">
                        <img src={house2} alt="house-2" />
                        <div className="p-4">
                            <div 
                                className="
                                    p-2
                                    text-center font-bold
                                    text-base
                                    sm:text-base md:text-base lg:text-base xl:text-lg
                                "
                            >
                                Titulo
                            </div>
                            <div 
                                className="
                                    font-thin tracking-wide
                                    text-sm
                                    sm:text-sm md:text-sm lg:text-sm xl:text-base
                                "
                            >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium cum cupiditate officiis autem accusantium, assumenda delectus magnam
                            </div>                         
                        </div>
                    </div>
                    <div className="border-2 w-84 h-auto shadow-2xl m-6 bg-white" >
                        <img src={house3} alt="house-3" />
                        <div className="p-4">
                            <div 
                                className="
                                    p-2
                                    text-center font-bold
                                    text-base
                                    sm:text-base md:text-base lg:text-base xl:text-lg
                                "
                            >
                                Titulo
                            </div>
                            <div 
                                className="
                                    font-thin tracking-wide
                                    text-sm
                                    sm:text-sm md:text-sm lg:text-sm xl:text-base
                                "
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium cum cupiditate officiis autem accusantium, assumenda delectus magnam
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default ServicesBox1;