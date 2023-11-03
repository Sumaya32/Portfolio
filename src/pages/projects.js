import React from "react";
import Header from "./../components/header";
import styles from "./projects.module.css";

export const Projects = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.miniContainer}>

                <div className={styles.projectCardsContainer}>
                    <div className={styles.firstProject}>
                        <h3 className={styles.title}>Personal project</h3>
                        <div className={styles.linkContainer}><p>Taverna Scheldeland</p><a a href="https://scheldeland-mwokpu3zf-sumaya32.vercel.app/" target="blank">https://tavernascheldeland.be</a></div>
                    </div>

                    <div className={styles.secondProject}>
                        <h3 className={styles.title}>School Project</h3>
                        <div  className={styles.linkContainer}><p>Juba Cocktails</p><a href="https://juba-cocktails.vercel.app/" target="blank">https://juba-cocktails.vercel.app/</a></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

