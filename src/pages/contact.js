import React from "react";
import styles from "./contact.module.css";
import Layout from "./../components/layout"

export const Contact = () => {
    return (
        <Layout>
            <div className={styles.formContainer}>
                <h1 className={styles.contactHeader}>Contact</h1>
                <form action="https://formsubmit.co/sumaya.ma@hotmail.com" method="POST">

                    <div className={` ${styles.border}`}>
                        <h5>Name</h5>
                        <input type="text" name="name" required placeholder="name" className={`${styles.input} ${styles.name}`}/>
                    </div>

                    <div className={` ${styles.border}`}>
                        <h5>Email</h5>
                        <input type="email" name="email" required placeholder="example@hotmail.com" className={`${styles.input} ${styles.email}`}/>
                    </div>

                    <div className={` ${styles.border}`}>
                        <h5>Message</h5>
                        <textarea name="message" placeholder="Write your message here!" className={`${styles.input} ${styles.textarea}`}></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send</button>

                    <input type="hidden" name="_next" value="http://localhost:3000/thankyou"></input>
                    <input type="hidden" name="_subject" value="New submission!"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                </form>
            </div>

            <div className={styles.LinkedIn}>
                <a href="https://www.linkedin.com/in/sumaya-mohamed-ahmed-97315726a/" target="__blank"> <img src="/linkedIn2.png"/></a>
            </div>
        </Layout>

    );
}

