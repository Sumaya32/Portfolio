import React from "react";
import Header from "./../components/header";
import image from "./../assets/myImage.jpg";
import styles from "./index.module.css";

export const Home = () => {
    return (
        
        <div className={styles.container}>
            <Header/>
            <div className={styles.sectionOne} id="/">

                <div className={styles.textContainer}>
                    <div className={styles.textMiniContainer}>
                        <div className={styles.title}>Welcome in my website</div>
                        <div className={styles.description}>
                            Text lenghts of Title and Author or even Description do not matter.
                            They will all perfectly accommodate into .thumb on hover
                        </div>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <img src={image} className={styles.image} alt="me standing in belcony with aan amezing view"/>
                </div>
            </div>
            
        </div>
    );
}

