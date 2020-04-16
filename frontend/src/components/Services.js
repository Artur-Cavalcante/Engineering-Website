import React from 'react';

import '../styles/output.css';


import ReformasResidenciaisEComerciais from './images/services/ReformasResidenciaisEComerciais.svg';
import ProjetosPrediaisEdeRede from './images/services/ProjetosPrediaisEdeRede.svg';
import LevantamentoCadastral from './images/services/LevantamentoCadastral.svg';
import Consultoria from './images/services/Consultoria.svg';
import Licitacao from './images/services/Licitacao.svg';
import Auditoria from './images/services/Auditoria.svg';

function Services() {
    return (
        <div
            className="
                bg-bg_gray 
                pb-20
                pt-8
                "
        >

            <section
                id="services-box"
                className="
                grid grid-rows-1 items-center justify-center
                gap-8 
                
                "
            >
                <div 
                    className="
                        flex flex-row justify-center 
                        "
                        >

                    <h1
                        className=" 
                        flex flex-row justify-center items-center
                        text-center
                        bg-primary

                        w-64 h-12
                        rounded-sm

                        shadow-xl
                        text-md
                "
                    >
                        Serviços
                </h1>
                </div>

                <div
                    className="
                    grid grid-cols-3 gap-16
                    
            ">
                    <div
                        className="
                        flex flex-col justify-center items-center
                        text-second
                        shadow-xl
                        rounded-lg
                        p-6
                        w-64

                    bg-white
                    "
                    >
                        <div >
                            <img src={ReformasResidenciaisEComerciais} alt="Reformas Residenciais" />
                        </div>
                        <h2 className="text-center">
                            Reformas Residênciais <br />e Comerciais
                    </h2>
                    </div>

                    <div
                        className="
                    flex flex-col justify-center items-center
                    text-second
                    shadow-xl
                    rounded-lg
                    p-6
                    w-64
                    bg-white
                    "

                    >
                        <div>
                            <img src={ProjetosPrediaisEdeRede} alt="ProjetosPrediaisEdeRede" />
                        </div>
                        <h2 className="text-center">
                            Projetos Prediais e de Rede
                    </h2>
                    </div>


                    <div
                        className="
                    flex flex-col justify-center items-center
                    text-second
                    shadow-xl
                    rounded-lg
                    p-6
                    w-64
                    
                    bg-white
                        "
                    >
                        <div >
                            <img src={LevantamentoCadastral} alt="LevantamentoCadastral" />
                        </div>
                        <h2 className="">
                            Levantamento Cadastral
                    </h2>
                    </div>


                    <div
                        className="
                    flex flex-col justify-center items-center
                    text-second
                    shadow-xl
                    rounded-lg
                    p-6
                    w-64

                    bg-white
                        "
                    >
                        <div>
                            <img src={Consultoria} alt="Consultoria" />
                        </div>
                        <h2 className="">
                            Consultoria
                    </h2>
                    </div>


                    <div
                        className="
                    flex flex-col justify-center items-center
                    text-second
                    shadow-xl
                    rounded-lg
                    p-6
                    w-64

                    bg-white
                        "
                    >
                        <div>
                            <img src={Licitacao} alt="Licitacao" />
                        </div>
                        <h2 className="">
                            Licitação
                    </h2>
                    </div>

                    <div
                        className="
                    flex flex-col justify-center items-center
                    text-second
                    shadow-xl
                    rounded-lg
                    p-6
                    w-64

                    bg-white
                        "
                    >
                        <div className="">
                            <img src={Auditoria} alt="Auditoria" />
                        </div>
                        <h2 className="">
                            Auditoria
                    </h2>
                    </div>

                </div>
            </section >
        </div>
    );
};

export default Services;