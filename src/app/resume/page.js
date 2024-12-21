"use client";
import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.cardOne}`}>
           <h2>knowledge of programming languages ​​and frameworks</h2>
         <ul>
          <li>React</li>
          <li>React Native</li>
          <li>TypeScript</li>
          
         </ul>
        </div>
        <div className={`${styles.card} ${styles.cardTwo}`}>test2</div>
        <div className={`${styles.card} ${styles.cardThree}`}>test3</div>
    
      </div>
    </div>
  );
}
