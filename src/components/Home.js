import React from 'react';
import '../styles/output.css';

import home_img from './images/home/home.svg';

function Home() {
    return (
        <section id="home-box">
            <div
                id="home-box-1"
                style={{ backgroundImage: `url(${home_img})` }}
                className="
                    w-full
                    h-auto

                    bg-no-repeat bg-center bg-cover
                    text-center
                "
            >
                <div className=" 
                    text-center
                ">
                    <div
                        className="
                            text-bold text-base text-white
                            md:text-2xl lg:3xl xl:text-4xl
                        "
                    >
                        15+ Years of Experience in Financial Services E Business.

                    </div>
                    <div className="text-sm text-white w-40 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint, non molestias, nesciunt, ab pariatur ducimus iste vero similique modi tenetur laborum quaerat ullam. Esse eaque quam
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;