import React from 'react';

import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact/Contact';

function Main(){
    return(
        <>
            <Home />
            <Services />
            <About />
            <Contact />
        </>
    );
};

export default Main;