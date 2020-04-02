import React from 'react';

import '../styles/output.css';
import home_img from './images/home/home.svg'

function Home(){
    return (
        <section 
            id="services-box">
            <div className="services-box-1">
                <div className="img">
                    {/* Colocar aqui a imagem como background para fazer o landing page, olha no learning */}
                </div>
                <div>
                    Titulo de Cima
                </div>
            </div>

            <div className="services-box-2">
                <div className="">
                    Nossos Projetos
                </div>
                <div className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde magni quisquam obcaecati blanditiis, ex molestias ab quae vel expedita, voluptate omnis vero? Deserunt harum a, ex commodi placeat hic? Quasi.
                </div>
            </div>

            <div className="services-box-3">
                <div className="">
                    Nossos Projetos
                </div>
                <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus necessitatibus. Velit quia, voluptatem ducimus temporibus veniam impedit corporis, delectus eligendi fugiat molestiae error nisi facilis illo perferendis eaque nesciunt?
                </div>
            </div>
        </section>
    );
};

export default Home;