"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./header.module.css";

const Header = () => {
    const [toggled, setToggled] = useState(false);
    const [_, setChange] = useState(false);

    let pathname = usePathname();
    let router = useRouter();
    const pages = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: " Resume",
            path: "/resume"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "Connect",
            path: "/contact"
        },
        {
            name: "LinkedIn",
            path: "https://www.linkedin.com/in/sumaya-mohamed-ahmed-97315726a"
        },
    ]

    const handleClick = () => {
        setToggled(!toggled)
    }

    const showNavbar = () => {
        setToggled(!toggled)
    }

    return (
        <header className={styles.headerContainer}>
            <nav className={toggled ? styles.responsive_nav : styles.nav}>
                {pages &&  pages.map((page, index) =>
                page.name !== "LinkedIn" &&
                
                    <li key={index} onClick={() => { handleClick(); setToggled(false); setChange(true) }} className={styles.listItem}>
                        <Link href={page.path} className={page.path === pathname ? styles.active : styles.navItem} onClick={() => { handleClick(); setToggled(false); setChange(true) }}>
                            {page.name}
                        </Link>
                    </li>
                )}


                    <li  className={styles.listItem}>
                        <Link href={pages[5].path} className={pages[5].path === pathname ? styles.navItem : ""} target="__blank">
                        <img src="linkedin.png" className={styles.linkedIn}/>
                        </Link>
                    </li>
                <button className={`${styles.nav_btn} ${styles.nav_close_btn}`} onClick={showNavbar} style={{ color: 'red' }}>
                    <FaTimes className={styles.faTimes} />
                </button>
            </nav>
            <button className={styles.nav_btn} onClick={showNavbar} style={{ color: 'red' }}>
                <FaBars className={styles.faBars} />
            </button>
        </header>
    )
}

export default Header;