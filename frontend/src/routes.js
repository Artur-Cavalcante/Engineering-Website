import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import About from './components/About.js';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/servicos" component={Services} />
            <Route path="/contato" component={Contact} />
            <Route path="/sobre" component={About} />
        </Switch>
    );
};

export default Routes;