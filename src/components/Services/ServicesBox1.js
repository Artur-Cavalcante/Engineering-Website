import React from 'react';
import '../../styles/output.css';

import casa1 from '../images/services/Casa1.svg';
import casa2 from '../images/services/Casa2.svg';
import casa3 from '../images/services/Casa3.svg';

function ServicesBox1(){
    return (
        <div
            id="services-box-1"
            className="
                bg-bg_gray
                p-8
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
                        <img className="w-full" src={casa1} alt="" />
                        <div className="p-4">
                            <div className="text-center font-bold text-lg p-2">
                                Titulo
                            </div>
                            <div className=" text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium cum cupiditate officiis autem accusantium, assumenda delectus magnam, sunt nesciunt placeat a optio dolorem aspernatur exercitationem fuga quasi asperiores aut!
                            </div>
                        </div>
                    </div>
                    <div className="border-2 w-84 h-auto shadow-2xl m-6 bg-white">
                        <img className="w-full" src={casa2} alt="" />
                        <div className="p-4">
                            <div className="text-center font-bold text-lg p-2">
                                Titulo
                            </div>
                            <div className=" text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium cum cupiditate officiis autem accusantium, assumenda delectus magnam, sunt nesciunt placeat a optio dolorem aspernatur exercitationem fuga quasi asperiores aut!
                            </div>                         </div>
                    </div>
                    <div className="border-2 w-84 h-auto shadow-2xl m-6 bg-white" >
                        <img className="w-full" src={casa3} alt="" />
                        <div className="p-4">
                            <div className="text-center font-bold text-lg p-2">
                                Titulo
                            </div>
                            <div className=" text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium cum cupiditate officiis autem accusantium, assumenda delectus magnam, sunt nesciunt placeat a optio dolorem aspernatur exercitationem fuga quasi asperiores aut!
                            </div>                         </div>
                    </div>
                </div>
            </div>

    );
};

export default ServicesBox1;