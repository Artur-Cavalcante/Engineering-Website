import React from 'react';
import '../../styles/output.css';

import AboutService from './AboutService';

import ReformasResidenciaisEComerciais from '../images/services/ReformasResidenciaisEComerciais.svg';
import ProjetosPrediaisEdeRede from '../images/services/ProjetosPrediaisEdeRede.svg';
import LevantamentoCadastral from '../images/services/LevantamentoCadastral.svg';
import Consultoria from '../images/services/Consultoria.svg';
import Licitacao from '../images/services/Licitacao.svg';
import Auditoria from '../images/services/Auditoria.svg';

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
                    gap-12
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

                            w-56 h-12
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
                        grid grid-cols-3 gap-8
                    ">
                    <div
                        className="
                            flex flex-col justify-center items-center
                            text-second
                            shadow-xl
                            rounded-lg
                            p-6
                            w-56
                            bg-white
                            
                        "
                    >
                        <div>
                            <img 
                                src={ReformasResidenciaisEComerciais} 
                                alt="Reformas Residenciais" 
                                className="
                                    w-16
                                "
                            />
                        </div>
                        <h2 
                            className="
                                text-center
                                text-base
                            "
                        >
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
                            w-56
                            bg-white
                        "
                    >
                        <div>
                            <img 
                                src={ProjetosPrediaisEdeRede} 
                                alt="ProjetosPrediaisEdeRede"
                                className="
                                    w-20
                                "
                            />
                        </div>
                        <h2 
                            className="
                                text-center
                                text-base
                            "
                        >
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
                            w-56
                            bg-white
                        "
                    >
                        <div>
                            <img 
                                src={LevantamentoCadastral} 
                                alt="LevantamentoCadastral" 
                                className="
                                    w-16
                                "
                            />
                        </div>
                        <h2 
                            className="
                                text-center
                                text-base
                            "
                        >
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
                            w-56
                            bg-white
                        "
                    >
                        <div>
                            <img 
                                src={Consultoria} 
                                alt="Consultoria" 
                                className="
                                    w-16                                
                                "
                            />
                        </div>
                        <h2
                            className="
                                text-center
                                text-base
                            "
                        >
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
                            w-56
                            bg-white
                        "
                    >
                        <div>
                            <img 
                                src={Licitacao} 
                                alt="Licitacao" 
                                className="
                                    w-20
                                "

                            />
                        </div>
                        <h2
                            className="
                                text-center
                                text-base
                            "
                        >
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
                            w-56
                            bg-white
                        "
                    >
                        <div>
                            <img 
                                src={Auditoria} 
                                alt="Auditoria" 
                                className="
                                    w-16
                                "
                            />
                        </div>
                        <h2
                            className="
                                text-center
                                text-base                                
                            "
                        >
                            Auditoria
                        </h2>
                    </div>

                </div>
            
                {/* <AboutService service={service}/> */}
            </section >
        </div>
    );
};

export default Services;