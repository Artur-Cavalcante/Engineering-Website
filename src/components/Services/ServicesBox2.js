import React from 'react';
import '../../styles/output.css';

import Licitacao from '../../images/services/Licitacao.svg';
import Auditoria from '../../images/services/Auditoria.svg';
import { FaHome, FaBuilding, FaDraftingCompass, FaUsers } from 'react-icons/fa';

function ServicesBox2() {
    return (
        <div
            id="services-box-2"
            className="
                flex flex-row 
                items-center justify-center
            "
        >
            <div
                className="
                    grid grid-cols-2 gap-5
                    sm:grid-cols-2 sm:gap-5
                    md:grid-cols-3 md:gap-8
                    lg:grid-cols-3 lg:gap-8
                    xl:grid-cols-3 lg:gap-8
                "
            >
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

                        w-32
                        sm:w-40
                        md:w-56
                        lg:w-56
                        xl:w-56
                    "
                >
                    <div>
                        <FaHome color="#777777" size="4rem" />
                    </div>
                    <h2
                        className="
                            font-thin tracking-wide
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

                        w-32
                        sm:w-40
                        md:w-56
                        lg:w-56
                        xl:w-56
                    "
                >
                    <div>
                        <FaBuilding color="#777777" size="4rem" />
                    </div>
                    <h2
                        className="
                            font-thin tracking-wide
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

                        w-32
                        sm:w-40
                        md:w-56
                        lg:w-56
                        xl:w-56
                    "
                >
                    <div>
                        <FaDraftingCompass color="#777777" size="4rem" />
                    </div>
                    <h2
                        className="
                            font-thin tracking-wide
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

                        w-32
                        sm:w-40
                        md:w-56
                        lg:w-56
                        xl:w-56
                    "
                >
                    <div>
                        <FaUsers color="#777777" size="4rem" />
                    </div>
                    <h2
                        className="
                            font-thin tracking-wide
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

                        w-32
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
                            font-thin tracking-wide
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

                        w-32
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
                            font-thin tracking-wide
                            text-center
                            text-sm md:text-base lg:text-base xl:text-base
                        "
                    >
                        Auditoria
                    </h2>
                </div>
            </div>
        </div >
    );
};

export default ServicesBox2;