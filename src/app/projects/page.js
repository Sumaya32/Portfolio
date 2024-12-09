"use client";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
            <div className={styles.iframeContainer}><iframe className={styles.iframe} overflow= "hidden" scrolling="no" src="https://www.tavernescheldeland.be/" /> </div>
            <div className={styles.textWrapper}>
                <h3>Taverne Scheldeland</h3>
                <p>Gezellig gelegen in Rupelmonde.
                  Een ongedwongen sfeer, tal van lokale producten,
                  een vers getapte pint en een fijnschalige kaart met goed gekozen gerechten,
                  karakteriseren het vernieuwde Scheldeland.
                </p>
                <a href="https://www.tavernescheldeland.be" >https://www.tavernescheldeland.be/</a>
            </div>
            </div>
        <div className={styles.card}>
        <div className={styles.iframeContainer}><iframe className={styles.iframe} overflow= "hidden" scrolling="no" src="https://juba-cocktails.vercel.app" width="100%" height={300}/> </div>
            <div>
                <h1>Juba Cocktails</h1>
                <p>fkdhgvkdfhigkfnhdkfnhb</p>
                <a href="https://juba-cocktails.vercel.app" >https://juba-cocktails.vercel.app</a>
            </div>
        </div>

        <div className={styles.card}>
        <div className={styles.iframeContainer}><img src="password manager.jfif" width="100%" height={300}/> </div>
            <div>
                <h1>Password manager</h1>
                <p>fkdhgvkdfhigkfnhdkfnhb</p>
                <p>Still in prograce</p>
                {/* <a href="https://juba-cocktails.vercel.app" >https://juba-cocktails.vercel.app</a> */}
            </div>
        </div>


      </div>
    </div>
  );
}
