import React from "react";
import Header from "./../components/header";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.miniContainer}>
                {children}
            </div>
        </div>
    );
}

export default Layout

