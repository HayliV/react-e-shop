import React from "react";
import styles from "./Intro.module.scss";

const Intro = () => {
    return (
        <div className={styles.Intro}>
            <h1 className={styles.Intro__title}>Handcrafted</h1>
            <h1 className={styles.Intro__subtitle}>Ceramic Homewares</h1>
        </div>
    );
};

export default Intro;
