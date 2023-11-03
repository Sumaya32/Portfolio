import { NavLink } from "react-router-dom";
import { useState,useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./header.module.css";

const Header = () => {
    const [toggled, setToggled] = useState(false);
    const navRef = useRef();
    
    const handleClick = () => {
        setToggled(!toggled)
    }

    const showNavbar = () => {
        setToggled(!toggled)
    }

    return (
        <header className={styles.headerContaqiner}>
            <nav ref={navRef} className={toggled ? styles.responsive_nav : ""}>
                <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.active} ${styles.navItem}` : `${styles.navItem}`)} onClick={() => { handleClick(); setToggled(false) }}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? `${styles.active}  ${styles.navItem}` : `${styles.navItem}`)} onClick={() => { handleClick(); setToggled(false) }}>
                About me
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? `${styles.active}  ${styles.navItem}` : `${styles.navItem}`)} onClick={() => { handleClick(); setToggled(false) }}>
                Projects
                </NavLink>
                <button className={`${styles.nav_btn} ${styles.nav_close_btn}`} onClick={showNavbar}>
                    <FaTimes className={styles.faTimes} />
                </button>
            </nav>
            <button className={styles.nav_btn} onClick={showNavbar}>
                <FaBars className={styles.faBars}/>
            </button>
        </header>
    )
}

export default Header