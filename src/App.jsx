import React from "react";
import styles from "./style.js";

import {
    Navbar,
    Hero,
    Stats,
    Business,
    Billing,
    CardDeal,
    Testimonials,
    Clients,
    CTA,
    Footer,
} from "./components";

const App = () => {
    return (
        <div>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.flexStart} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div
                className={`${styles.paddingX} ${styles.flexStart} bg-primary`}
            >
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
                <div className={`${styles.boxWidth}`}></div>
            </div>
        </div>
    );
};

export default App;
