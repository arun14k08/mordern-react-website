import React from "react";
import styles from "./style.js";

const App = () => {
    return (
        <div>
            <div className={`${styles.padding} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>Navbar</div>
            </div>

            <div className={` ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>Hero</div>
            </div>
        </div>
    );
};

export default App;
