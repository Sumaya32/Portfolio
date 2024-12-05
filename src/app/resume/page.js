"use client";
import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.cardOne}`}>
           <h2>knowledge of programming languages ​​and frameworks</h2>
         <ul>
          <il>React</il>
          <il>React Native</il>
          <il>TypeScript</il>
          <il></il>
          <il></il>
          <il></il>
          <il></il>
         </ul>
        </div>
        <div className={`${styles.card} ${styles.cardTwoMove}`}>test2</div>
        <div className={`${styles.card} ${styles.cardThreeMove}`}>test3</div>
    
      </div>
    </div>
  );
}
