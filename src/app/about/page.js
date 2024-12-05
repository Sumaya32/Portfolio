"use client";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.miniContainer}>
        
        <div className={styles.imageConitainer}>
          <img src="./images.jpeg" className={styles.image} />
        </div>

        <div className={styles.textContainer}>
        <h1 className={styles.aboutMe}>About me</h1>
          <p className={styles.text}>What is Lorem Ipsum?
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s
          tandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          <b/>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          <b/>
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum */}
          </p>
        </div>
      </div>
    </div>
  );
}
