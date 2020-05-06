import React from 'react';

import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact/Contact';

function Main(){
    return(
        <div className="bg-bg_gray">
            <Home />
            <Services />
            <About />
            <Contact />
        </div>
    );
};

export default Main;