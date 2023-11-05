import React from "react";
import Layout from "../components/layout"
import styles from "./thankyou.module.css";

export const Final = () => {
    return (
        <Layout>
            <div className={styles.cardContainer}>
                <div className={styles.contentContainer}>
                    <h1 className={styles.ThanksTitle}>Thank you!</h1>
                    <p>Thank you for taking time to review my portfolio.</p>
                    <p>I will get back to you as soon as posiable.</p>
                </div>
            </div>
        </Layout>
    );
}

