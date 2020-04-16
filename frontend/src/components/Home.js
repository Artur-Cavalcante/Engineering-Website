import React from 'react';

import '../styles/output.css';
import home_img from './images/home/home.svg'

function Home() {
    return (
        <section
            id="services-box"
            className="
                grid
                grid-rows-3
                sm:grid-rows-3
                md:grid-rows-3
                lg:grid-rows-4 
                xl:grid-rows-5

                

                
                "    
        >
            <div id="service-box-1"
                style={{ backgroundImage: `url(${home_img})` }}
                className="
                        row-span-1

                        sm:row-span-1
                        md:row-span-2
                        lg:grid-rows-3
                        xl:row-span-3
                        
                        w-auto 
                        h-100
                        
                        relative
                        bg-no-repeat bg-center bg-cover  
                        text-center
                    "
            >
                Titulo de Cima
            </div>

            <div id="services-box-2"
                className="
                    bg-white
                    row-span-1
                "
            >
                <div className="text-center">
                    Nossos Projetos
                </div>
                <div className="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde magni quisquam obcaecati blanditiis, ex molestias ab quae vel expedita, voluptate omnis vero? Deserunt harum a, ex commodi placeat hic? Quasi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus necessitatibus. Velit quia, voluptatem ducimus temporibus veniam impedit corporis, delectus eligendi fugiat molestiae error nisi facilis illo perferendis eaque nesciunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus necessitatibus. Velit quia, voluptatem ducimus temporibus veniam impedit corporis, delectus eligendi fugiat molestiae error nisi facilis illo perferendis eaque nesciunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus necessitatibus. Velit quia, voluptatem ducimus temporibus veniam impedit corporis, delectus eligendi fugiat molestiae error nisi facilis illo perferendis eaque nesciunt?

                </div>
            </div>

            <div id="services-box-3"
                className="
                bg-bg_blue
                row-span-1

                "
            >
                <div className="text-center">
                    Nossos Projetos
                </div>
                <div className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus necessitatibus. Velit quia, voluptatem ducimus temporibus veniam impedit corporis, delectus eligendi fugiat molestiae error nisi facilis illo perferendis eaque nesciunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus necessitatibus. Velit quia, voluptatem ducimus temporibus veniam impedit corporis, delectus eligendi fugiat molestiae error nisi facilis illo perferendis eaque nesciunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus necessitatibus. Velit quia, voluptatem ducimus temporibus veniam impedit corporis, delectus eligendi fugiat molestiae error nisi facilis illo perferendis eaque nesciunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus necessitatibus. Velit quia, voluptatem ducimus temporibus veniam impedit corporis, delectus eligendi fugiat molestiae error nisi facilis illo perferendis eaque nesciunt?

                </div>
            </div>
        </section>
    );
};

export default Home;