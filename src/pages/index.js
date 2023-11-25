import React from "react";
import Layout from "./../components/layout"
import image from "./../assets/myImage.jpg";
import styles from "./index.module.css";

export const Home = () => {
    return (

        <Layout>
            <div className={styles.container}>
                <div className={styles.miniContentContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.textContentContainer}>
                            <div className={styles.title}>Welcome to my website</div>

                            <div className={styles.description}>
                                <p>
                                    Hello everyone<br />
                                    My name is Sumaya as you can see from the website’s address.
                                    I’ve just started my journey as a front-end developer.I love designing and coding.
                                </p>
                                <br />

                                <p>
                                    I’m someone who has a very big passion for technology and innovation.
                                    The most amazing and satisfying feeling is when you start a project from zero to a beautiful functioning software.
                                    Besides my knowledge of HTML, CSS and JS I also have the knowledge of frameworks such as React.
                                    I also worked with a CMS like WordPress and Contentful.
                                </p>
                                <br />

                                <p>
                                    Please check the resume page to see my knowledge and skills.
                                    You can contact me via the form or LinkedIn. I’m looking forward to hear from you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src={image} className={styles.image} alt="me standing in belcony with aan amezing view" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

