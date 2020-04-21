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
                            text-sm md:text-base lg:text-base xl:text-base
                        "
                    >
                        Serviços
                    </h1>
                </div>

                <div
                    className="
                        grid grid-cols-2 gap-5
                        sm:grid-cols-2 sm:gap-5
                        md:grid-cols-3 md:gap-8
                        lg:grid-cols-3 lg:gap-8
                        xl:grid-cols-3 lg:gap-8
                        
                        
                    ">
                    <div
                        className="
                            flex flex-col justify-center items-center
                            text-second
                            shadow-xl
                            rounded-lg
                            bg-white
                            
                            p-4
                            sm:p-4
                            md:p-6
                            lg:p-6
                            xl:p-6

                            w-40
                            sm:w-40
                            md:w-56
                            lg:w-56
                            xl:w-56
                            
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
                                text-sm md:text-base lg:text-base xl:text-base
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
                            bg-white
                            p-4
                            sm:p-4
                            md:p-6
                            lg:p-6
                            xl:p-6

                            w-40
                            sm:w-40
                            md:w-56
                            lg:w-56
                            xl:w-56
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
                                text-sm md:text-base lg:text-base xl:text-base
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
                            bg-white
                            p-4
                            sm:p-4
                            md:p-6
                            lg:p-6
                            xl:p-6

                            w-40
                            sm:w-40
                            md:w-56
                            lg:w-56
                            xl:w-56
                        "
                    >
                        <div>
                            <img 
                                src={LevantamentoCadastral} 
                                alt="LevantamentoCadastral" 
                                className="
                                    w-18
                                "
                            />
                        </div>
                        <h2 
                            className="
                                text-center
                                text-sm md:text-base lg:text-base xl:text-base
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
                            bg-white
                            p-4
                            sm:p-4
                            md:p-6
                            lg:p-6
                            xl:p-6

                            w-40
                            sm:w-40
                            md:w-56
                            lg:w-56
                            xl:w-56
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
                                text-sm md:text-base lg:text-base xl:text-base
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
                            bg-white
                            p-4
                            sm:p-4
                            md:p-6
                            lg:p-6
                            xl:p-6

                            w-40
                            sm:w-40
                            md:w-56
                            lg:w-56
                            xl:w-56
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
                                text-sm md:text-base lg:text-base xl:text-base
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
                            bg-white
                            p-4
                            sm:p-4
                            md:p-6
                            lg:p-6
                            xl:p-6

                            w-40
                            sm:w-40
                            md:w-56
                            lg:w-56
                            xl:w-56
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
                                text-sm md:text-base lg:text-base xl:text-base
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