"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = (path) => {
    const rootPath = "http://localhost:3000/";

    if (path === "about") {
      router.push(`${rootPath}about`);
    }

    if (path === "resume") {
      router.push(`${rootPath}resume`);
    }
    if (path === "projects") {
      router.push(`${rootPath}projects`);
    }
    if (path === "contact") {
      router.push(`${rootPath}contact`);
    }
  };

  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.video}>
        <source src="/Rainfall-920x1080.mp4" type="video/mp4" />
      </video>

      <div className={styles.topContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.cardMiniContainer}>
            <div className={styles.dot}></div>
            <div className={styles.card} onClick={(e) => handleClick("about")}>
              About
            </div>
          </div>

          <div className={styles.cardMiniContainer}>
            <div className={styles.dot}></div>
            <div className={styles.card} onClick={(e) => handleClick("resume")}>
              Resume
            </div>
          </div>

          <div className={styles.cardMiniContainer}>
            <div className={styles.dot}></div>
            <div
              className={styles.card}
              onClick={(e) => handleClick("projects")}
            >
              Projects
            </div>
          </div>

          <div className={styles.cardMiniContainer}>
            <div className={styles.dot}></div>
            <div
              className={styles.card}
              onClick={(e) => handleClick("contact")}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
