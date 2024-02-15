import React from "react";
import { stats } from "../constants/index.js";
import styles from "../style.js";

const Stats = () => {
    return (
        <section
            className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 text-white`}
        >
            {stats.map((stat) => {
                return (
                    <div
                        key={stat.id}
                        className={`flex-1 flex m-3 justify-start items-center flex-row`}
                    >
                        <h4 className="font-poppins text-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                            {stat.value}
                        </h4>
                        <p className="font-poppins text-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                            {stat.title}
                        </p>
                    </div>
                );
            })}
        </section>
    );
};

export default Stats;
