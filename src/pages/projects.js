import React from "react";
import Layout from "./../components/layout";
import styles from "./projects.module.css";

export const Projects = () => {
    return (
        <Layout>
            <div className={styles.projectCardsContainer}>
                <div className={styles.firstProject}>
                    <h3 className={styles.title}>Personal project</h3>
                    <div className={styles.projecLinkContainer}>
                        {/* <p>Taverna Scheldeland</p>
                        <a a href="https://www.tavernescheldeland.be" target="blank">https://tavernascheldeland.be</a> */}
                        <p>Temporary link</p>
                        <a a href="https://scheldeland-git-development-sumaya32.vercel.app/" target="blank">tavernescheldeland</a>
                    </div>
                </div>

                <div className={styles.secondProject}>
                    <h3 className={styles.title}>School Project</h3>
                    <div className={styles.projecLinkContainer}>
                        <p>Juba Cocktails</p>
                        <a href="https://juba-cocktails.vercel.app/" target="blank">https://juba-cocktails.vercel.app/</a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

