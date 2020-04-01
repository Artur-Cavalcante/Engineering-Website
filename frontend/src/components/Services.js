import React from 'react';

import ReformasResidenciaisEComerciais from './images/services/ReformasResidenciaisEComerciais.svg';
import ProjetosPrediaisEdeRede from './images/services/ProjetosPrediaisEdeRede.svg';
import LevantamentoCadastral from './images/services/LevantamentoCadastral.svg';
import Consultoria from './images/services/Consultoria.svg';
import Licitacao from './images/services/Licitacao.svg';
import Auditoria from './images/services/Auditoria.svg';

function Services() {
    return (
        <section className="services-box">
            <h1>
                Serviços
            </h1>

            <div className="grid vai ser aqui">
                <div>
                    <div className="">
                        <img src={ReformasResidenciaisEComerciais} alt="ReformasResidenciaisEComerciais" />
                    </div>
                    <h2 className="">
                        Reformas Residênciais e Comerciais
                    </h2>
                </div>

                <div>
                    <div className="">
                        <img src={ProjetosPrediaisEdeRede} alt="ProjetosPrediaisEdeRede"/>
                    </div>
                    <h2 className="">
                        Projetos Prediais e de Rede
                    </h2>
                </div>


                <div>
                    <div className="">
                        <img src={LevantamentoCadastral} alt="LevantamentoCadastral"/>
                    </div>
                    <h2 className="">
                        Levantamento Cadastral
                    </h2>
                </div>


                <div>
                    <div className="">
                        <img src={Consultoria} alt="Consultoria"/>
                    </div>
                    <h2 className="">
                        Consultoria
                    </h2>
                </div>


                <div>
                    <div className="">
                        <img src={Licitacao} alt="Licitacao"/>
                    </div>
                    <h2 className="">
                        Licitação
                    </h2>
                </div>

                <div>
                    <div className="">
                        <img src={Auditoria} alt="Auditoria"/>
                    </div>
                    <h2 className="">
                        Auditoria
                    </h2>
                </div>

            </div>
        </section>
    );
};

export default Services;