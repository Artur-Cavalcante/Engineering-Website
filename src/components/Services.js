import React from 'react';
import '../styles/output.css';

import ServicesBox1 from './Services/ServicesBox1';
import ServicesBox2 from './Services/ServicesBox2';

function Services() {
    return (
        <section
            id="services-box"
            className="
                bg-bg_gray
                pb-20
                pt-8
            "
        >
            <ServicesBox1 />
            <ServicesBox2 />
        </section>
    );
};

export default Services;