import React from "react";
import Layout from "../components/layout"
import styles from "./confirmation.module.css";

export const Confirmation = () => {
    return (
        <Layout>
            <div className={styles.cardContainer}>
                <div className={styles.contentContainer}>
                    <h1 className={styles.ThanksTitle}>Thank you!</h1>
                    <p>Thank you for taking time to review my portfolio.</p>
                    <p>I will get back to you as soon as possible.</p>
                </div>
            </div>
        </Layout>
    );
}

